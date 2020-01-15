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
import survey from './screens/lecture/SurveyScreen';
import bookmark from './screens/lecture/BookMark';
import data from './screens/lecture/DataScreen';
import member from './screens/lecture/MemberScreen';
import note from './screens/lecture/NoteScreen';
import notice from './screens/lecture/NoticeScreen';
import report from './screens/lecture/ReportScreen';
import schedule from './screens/lecture/ScheduleScreen';
import attendance from './screens/lecture/AttendanceScreen';
import datacollect from './screens/lecture/DataCollect';
import createAttendance from './screens/lecture/createAttendance';


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
    createAttendance:{screen:createAttendance},

},{
    initialRouteName : 'Auth',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;