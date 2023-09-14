// express로 서버 만들기 기본 셋팅
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// bodyparser 사용 설정
app.use(bodyParser.urlencoded({extended: true}));

// ejs 사용 설정
app.set('view engine', 'ejs');

// 몽고DB랑 연결해주는 코드
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect('mongodb+srv://yysu33:rjsgml99@you.tl3j1fj.mongodb.net/', 
function(에러, client){
    if(에러) {
        return console.log(에러)
    }
    // 나는 몽고db atlas에 todoapp이라는 이름의 데이터베이스를 만들어둠
    // 이 코드로 todoapp이라는 데이터베이스에 접속 가능
    db = client.db('you');

    app.listen(3000, function(){
        console.log('db connected')
    })
})

/*
// listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function () {
    console.log("서버 실행 중");
});
*/

// get('경로', 함수)
// function(요청, 응답)
app.get("/first", function (req, res) {
    res.send("첫번째 페이지임");
});

app.get("/second", function (req, res) {
    res.send("두번째 페이지임요");
});

// html파일 띄우는 소스
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/write", function (req, res) {
    res.sendFile(__dirname + "/write.html");
});

// POST요청을 처리하는 소스
app.post("/add", function (req, res) {
    res.send('전송완료');
    console.log(req.body.title);
    console.log(req.body.date);
    var title = req.body.title;
    var date = req.body.date;

    // counter라는 collection에서 데이터 가져오는 코드
    // 게시물갯수 라는 이름의 데이터를 찾아서 가져옴
    db.collection('counter').findOne({name: '게시물갯수'}, function(에러, 결과){
        console.log(결과.totalPost)
        var 총게시물갯수 = 결과.totalPost;
        // 몽고db atlas에 post라는 collection도 만들었었음
        // db에 데이터 저장하는 코드임
        // 데이터 양식은 {키 : 밸류} 형태임
        // _id는 데이터의 인덱스값 같은거 적어주는거임
        db.collection('post').insertOne({_id : 총게시물갯수+1, 제목 : title, 날짜 : date}, function(에러, 결과){
            console.log('저장완료');
            // db의 값을 업데이트(수정)하는 코드
            // updateOne({수정할데이터},{$set : {수정값}},function(){})
            // $set이 update operator(연산자)임, 값을 바꿔줌
            // 연산자에는 $inc도 있음 이건 값을 더해줌
            db.collection('counter').updateOne({name:'게시물갯수'},{$inc : {totalPost:1}},function(에러, 결과){
                if(에러){
                    return console.log(에러)
                }
            });
        });
    });
});

// ejs파일 불러오는 코드
app.get('/list', function(req, res) {
    // post라는 collection에서 모든 데이터 꺼내오기
    db.collection('post').find().toArray(function(에러, 결과){
        console.log(에러);
        console.log(결과);
        // DB에서 가져온 데이터를 ejs파일에 넣어 줌
        // 데이터는 posts라는 변수에 넣어 줌
        res.render('list.ejs', {posts : 결과});
    });

});