import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// //const express=require('express')//모듈 가져오기
// const mongoose=require('mongoose')
// var methodOverride = require('method-override');
// const app = express()//어플리케이션 생성

// app.set('views', __dirname+'/views') //템플릿
// app.set('view engine','ejs')//템플릿 엔진
// app.engine('html',require('ejs').renderFile)
// app.use(express.static(__dirname+'/public'));//서버에 요청할 때마다 무조건 콜배함수 실행됨

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));

// // DB setting
// mongoose.connect(process.env.MONGO_DB);
// var db = mongoose.connection; 

// db.once('open', function(){
//   console.log('DB connected');
// })

// db.on('error', function(err){
//   console.log('DB ERROR : ', err);
// });

// app.get('/welcome', (req,res)=>{
//   res.render('welcome', {name:req.query.nameQuery});
// })

// app.get('/welcome/:nameParam',(req,res)=>{
//   res.render('welcome', {name:req.params.nameParam});
// })

// //port setting
// const server=app.listen(3000, ()=>{
//   console.log('Start Server : localhost:3000')
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
