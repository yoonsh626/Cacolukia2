const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/example';

MongoClient.connect(url, (err, database) => {
   if (err) {
      console.log('MongoDB 연결 실패');
      return;
   }
   console.log("MongoDB 연결 성공");

   // 연결 종료하기
   database.close();
   
   //현재 테스트 파일을 편집중입니다.
   //20180611 YSH
   
   
   
   
});
