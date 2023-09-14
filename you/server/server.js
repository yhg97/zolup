// express로 서버 만들기 기본 셋팅
const express = require("express");
const app = express();

// listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function () {
    console.log("서버 실행 중");
});

// get('경로', 함수)
// function(요청, 응답)
app.get("/first", function (req, res) {
    res.send("첫번째 페이지임");
});

app.get("/second", function (req, res) {
    res.send("두번째 페이지임");
});