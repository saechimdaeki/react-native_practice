import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import LectureScreen from './screens/LectureScreen';
import SettingScreen from './screens/setting/SettingScreen';

import GroupSearchScreen from './screens/group/GroupSearchScreen';
import GroupMakeScreen from './screens/group/GroupMakeScreen';

import NoteScreen from './screens/note/NoteScreen';

import MyPageScreen from './screens/my/MyPageScreen';

import NoticeScreen from './screens/notice/NoticeScreen';
import NoticeDetailScreen from './screens/notice/NoticeDetailScreen';

import PrefFavoriteScreen from './screens/pref/PrefFavoriteScreen';
import PrefHiddenGroupScreen from './screens/pref/PrefHiddenGroupScreen';

import writescreen from './screens/WriteScreen';
//lecturedetail
import survey from './screens/lecturedetail/SurveyScreen';
import bookmark from './screens/lecturedetail/BookMark';
import data from './screens/lecturedetail/DataScreen';
import member from './screens/lecturedetail/MemberScreen';
import note from './screens/lecturedetail/NoteScreen';
import notice from './screens/lecturedetail/NoticeScreen';
import report from './screens/lecturedetail/ReportScreen';
import schedule from './screens/lecturedetail/ScheduleScreen';
import attendance from './screens/lecturedetail/AttendanceScreen';
import datacollect from './screens/lecturedetail/DataCollect';



import Animated, { Easing } from 'react-native-reanimated';

const MainNavigator = createStackNavigator({
    //Auth 로그인
    Auth: {screen: AuthScreen },
    //Home 홈
    Home: {screen: HomeScreen },
    Lecture : {screen: LectureScreen},
    Setting : {screen:SettingScreen},
    //MyPage 마이페이지
    MyPage : {screen:MyPageScreen},
    //Notice 공지
    Notice : {screen:NoticeScreen},
    NoticeDetail : {screen:NoticeDetailScreen},
    //Note 쪽지
    Note : {screen:NoteScreen},
    //Group 그룹
    GroupMake : {screen:GroupMakeScreen},
    GroupSearch : {screen:GroupSearchScreen},
    //pref
    PrefFavorite : {screen:PrefFavoriteScreen},
    PrefHiddenGroup : {screen:PrefHiddenGroupScreen},

    //강의대화 글쓰기
    writescreen:{screen:writescreen},
    //강의조사 detail
    survey:{screen:survey},
    bookmark:{screen:bookmark},
    data:{screen:bookmark},
    member:{screen:member},
    note:{screen:note},
    notice:{screen:notice},
    report:{screen:report},
    schedule:{screen:schedule},
    attendance:{screen:attendance},
    datacollect:{screen:datacollect},

},{
    initialRouteName : 'Auth',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;