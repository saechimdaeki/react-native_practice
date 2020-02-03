### KHUB Back-end 정리 

## khub 구성도 

![khub](https://user-images.githubusercontent.com/40031858/73335785-a307d480-42b3-11ea-8312-0d25d28fa1c6.JPG)

------------------------
### PC
* PC에서는 DBProc클래스들을통해 직접db를 접근함.(path :khub/src/main/java/es/bean/~Proc.java)

####  예를들어서 LogProc의 경우 DBProc클래스를 상속받는데 여기서 하나의 메소드를 살펴보면  

<code>

    public class LogProc extends DBProc{
	private Logger logger = Logger.getLogger(LogProc.class); //Loger클래스를 통해 logger를만들고 이를 이용하여 logger.debug()를 사용하면 console에서쉽게 확인할수있음. log수준은 serve,warning,info순으로 레벨수준 나타냄.

	public LogProc(String dbname) {
		super(dbname); //DBporc의 dbname
	}

	public String getWeeklyDate(String type, int idate) {
		String result = "";

		StringBuffer sql = new StringBuffer();
		sql.append("select ");
		if(type.equals("all")) {
			sql.append("DATE_SUB(CURRENT_DATE(), INTERVAL ").append(idate).append(" DAY)"); // 
		}else{
			sql.append("DATE_SUB(CURRENT_DATE(), INTERVAL ").append(idate).append(" DAY), DATE_SUB(CURRENT_DATE(), INTERVAL ");
			sql.append(idate-7).append(" DAY)");
	 	}   //string 으로 값들을 append시켜서

		try {
			CachedRowSet crs = select(sql.toString());  //모든열을 캐시에저장하고 데이터베이스와의 연결을 유지하지않도록 구현된 rowset의형태 (접속끊어져있는 상태에서 데이터조작후 한번에 DB서버에 반영위한)

			while(crs.next()){
				if(type.equals("all"))
		        	result = crs.getString(1);
		        else
		        	result = crs.getString(1)+","+crs.getString(2);
			} //rowset객체를 이용하여 정방향으로 이동하면서 열의데이터 탐색
		} catch (SQLException e) {
			logger.warn(e);
		}

		return result;
	}

</code>

- ↑  weeklylog.jsp에서 쓰이는 메소드 
<code>
		
		//weeklylog.jsp일부 발췌
		for(int i=0; i<4; i++) {
			start_time += 7;
			String dateList = db.getWeeklyDate("", start_time);
			String[] time = dateList.split(",");)

</code>

#### 1.출석부와 관련된 DB를살펴보려면 GroupMemberInfo.java, AttendProc.java, AttendInfo.java,Question.java,... es/bean/attend에 있는 java파일들을 살펴보면 됩니다. 

~~너무많아서 세개만...~~
* AttendInfo

![attendinfo](https://user-images.githubusercontent.com/40031858/73338348-ba49c080-42b9-11ea-8ba2-384008b0d1dd.JPG)

* GroupMemberInfo

![groupmemberinfo](https://user-images.githubusercontent.com/40031858/73338825-c8e4a780-42ba-11ea-9b0c-ea10e9f70c96.JPG)

* Question

![Question](https://user-images.githubusercontent.com/40031858/73339639-87ed9280-42bc-11ea-8c9f-3508e6a68f9a.JPG)

* DB는 AttendProc이라는 DBProc을 상속한 클래스에서 사용.



기존에는 InterverTask.java에서 출석체크 미참여한 인원들을 체크해오던 방식으로 
* Intervaltask

![Intervaltask](https://user-images.githubusercontent.com/40031858/73420990-b8d6d180-4367-11ea-87ac-a1c1dcc50d51.JPG)

위의방식을 AttendProc에서 
<code>

	static{
		new Timer().scheduleAtFixedRate(new IntervalTask(),0,5000);	
	}

</code>

이와같은식으로 5초마다 호출하여서 출석체크를 체크하고 그룹원을 체크한후 출석체크를 종료시키던것을 

## 출석부가 종료되어야 History호출 되게끔

![GETATTEND](https://user-images.githubusercontent.com/40031858/73421740-3865a000-436a-11ea-843d-a805001eb67a.JPG)

- 출석부를 종료시키는 함수인 setGroupAttendsShouldClosed가 현재 출석중인 리스트의 사이즈가 0이넘으면 AttendInfo iterator를 돌려서 리스트를 종료시킴.  출석기능이 느린이유는 PC쪽에서 DB와 직접접근하는 메소드간 알고리즘은 문제가없어보임. 바꾸기전에는 최악의 경우 IntervalTask.size()가 n인경우 O(n²) 바꾼후 O(n) 

---------------------------

#### 그렇다면 출석체크를 느리게 하는 다른요소를 찾아보자.

| RESULTSET | ROWSET |
|---|:---:|
|resultset은 항상 db와 연결유지하는 아키텍쳐 | rowset은 연결을 유지할수도 연결을 끊을수도있음. |
| resultset은 직렬화할수없음 | rowset은직렬화가능 |
|resultset개체는 다른네트워크를 통해 전달될수없음 | rowset 개체는 네트워크통해 전달가능 |
| 기본적으로 resultset개체는 스크롤할수없거나 업데이트가 불가함 | rowset개체는 가능  |

> rowset의 종류중 하나로 cachedrowset은 모든열을 캐시에 저장하고 데이터베이스와의 연결을 유지하지않도록 구현된 rowset의 형태로 데이터 읽기를 행으로 채우는 과정과 변경사항을 커밋하는 과정에서만 데이터베이스와의 연결을 사용. 연결이 끊어진 상태에서는 cachedrowset개체가 resultset개체보다 가벼워 응용프로그램의 다른 구성요소로 전달하기쉬움. 또한 cachedrowset개체의 데이터를 수정할수있지만 수정내용이 데이터베이스에 즉시반영되지는않음. 커밋할때 연결이 다시설정되어야하므로 이것이 느리게하는 요소일지 모른다고 판단. 읽기또는 쓰기만할때를 제외하고는 JDBCrowset의 사용이 자원낭비가 되겠지만 계속해서 DB와 정보를 주고받는 출석체크의경우에는 속도가 향상될것으로 보입니다.

* 참고: 데이터베이스 쿼리를 소비하여 응용프로그램의 나머지부분에 사용하기 위해 java데이터 모델 객체로 변환하는 코드일경우 rowset이 resultset보다 성능이 느림 (50,000행기준 0.5초느림 ) 


### 2.RestApi부분
####  사용 하는 DBproc클래스들을 es.bean에서 불러와 service.java에 아래와 같이 미리 선언



<code>
        
    private GroupAdminProc groupAdminProc = new GroupAdminProc(conf.getString("dbname"));
	private SnsProc snsProc = new SnsProc(conf.getString("dbname"));
	private DBProc dbProc = new DBProc(conf.getString("dbname"));
	private EventProc eventProc = new EventProc(conf.getString("dbname"));
	private TokenProc tokenProc = new TokenProc(conf.getString("dbname"));
	private AttendProc attendProc = new AttendProc(conf.getString("dbname"));
    private NoteProc noteProc = new NoteProc(conf.getString("dbname"));
	private RecommendProc recommendProc = new RecommendProc(conf.getString("dbname"));
	private DirectUrlProc directUrlProc = new DirectUrlProc(conf.getString("dbname"));
	private CompanyProc cdb = new CompanyProc(conf.getString("dbname"));
	private SchedulerProc schedulerProc = new SchedulerProc(conf.getString("dbname"));
	private PaperProc paperProc = new PaperProc(conf.getString("dbname"));
	private LogProc logProc = new LogProc(conf.getString("dbname"));
	private myGroupProc myGroupProc = new myGroupProc(conf.getString("dbname"));
	private QuizProc quizProc = new QuizProc(conf.getString("dbname"));
	private ReservationNotificationProc rnProc = new ReservationNotificationProc(conf.getString("dbname"));
	private SurveyProc surveyProc = new SurveyProc(conf.getString("dbname"));
	private weeklyLectureProc weeklyProc = new weeklyLectureProc(conf.getString("dbname"));

</code>


* 출석체크관련내용을 살펴보면 service.java에서 Attendproc을 사용하기위해

<code>

	import es.bean.attend.AttendProc;
	private AttendProc attendProc = new AttendProc(conf.getString("dbname"));
</code>

*  이후 아래와 같은식으로 사용 

![Service](https://user-images.githubusercontent.com/40031858/73513623-8691a680-4431-11ea-82c1-c4e779636f82.JPG)

이러한 코드를 restapi/resource/AttendsResoruce.java에서 JSON형태로 API를만들음.



----------------

### Mobile


