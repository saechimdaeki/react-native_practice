# react-native_practice
#### 2020년 1학기 react-native관련 인턴을 하게되어서 react-native, expo.io를  처음 시작해보는 저장소입니다 

## error 일어날시 node_modules -> src ->defaults ->blacklist.js의 내용  변경(아래와 같이)

var sharedBlacklist = [  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,

  /website\/node_modules\/.*/,

  /heapCapture\/bundle\.js/,

  /.*\/__tests__\/.*/

];

## 그 후 ./gradlew clean 실행 in root folder



### StudyNote 📖
- react-native란 javaScript로 어플리케이션을 만들수 있는 프레임워크
- 활용 사례는 인스타그램 스카이프 페이스북 디스코드 등.

react-native의 구조 :

![react](./rimg.JPG)

- 웹 페이지가 있을때 html은 웹페이지의 뼈대를 구성 css는 웹페이지의 보여지는 부분 및 UI, javascript는 동적인 움직임을 부여 

- ECMA는 JAVAscript와 다른언어를 포함한 표준안.
- let으로는 변수를 선언만 할수있지만 const는 불가능 하지만 const는 데이터값을 변경시킬수는없음.
- function안에서 this는 전역객체를 가르키고 객체안에서 this는 그 객체를 가르킴.
- arrow function이라는 기능이 추가되어 이는 예시를 들면 다음과 같은 뜻. 

> const a123 = function(a,b){
  return a+b
}

> const a1234 = (a,b) => {
  return a+b 
}








