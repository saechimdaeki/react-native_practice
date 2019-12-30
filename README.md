# react-native_practice
#### 2020년 1학기 react-native관련 인턴을 하게되어서 react-native, expo.io를  처음 시작해보는 저장소입니다 

## error 일어날시 node_modules -> src ->defaults ->blacklist.js의 내용  변경(아래와 같이)

var sharedBlacklist = [  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

## 그 후 ./gradlew clean 실행 root folder



