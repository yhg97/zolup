const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 8001;

// MongoDB 연결 함수
async function connectToMongoDB() {
    try {
        const db_url = 'mongodb+srv://you:1234@you.tl3j1fj.mongodb.net/?retryWrites=true&w=majority';
        const client = await MongoClient.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true });
        return client; // MongoDB 클라이언트 객체 반환
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Express 미들웨어 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/css', express.static(__dirname + '/css'));
app.get('/', (req, res)=>{
    app.render('index.ejs');
})
const ejs = require('ejs');
// 라우터 설정
const router = express.Router();
// '/member' 라우트를 사용하기 위해서 member.js 파일이 필요합니다.
router.use('/member', require('./routes/member.js'));

router.get('/', (req, res) => {
    res.render('index'); // EJS 템플릿으로 렌더링
});


// 회원가입 POST 라우트 설정
router.post('/register', async (req, res) => {
    const { id, pw } = req.body;

    try {
        // MongoDB 클라이언트 객체를 가져옴
        const client = await connectToMongoDB();
        const db = client.db('you');

        // MongoDB에 데이터 추가
        const result = await db.collection('users').insertOne({ id, pw });
        console.log('User inserted:', result.insertedId);

        // 사용이 끝난 MongoDB 클라이언트 닫기
        client.close();

        // 2초 후에 로그인 페이지로 리다이렉션
        setTimeout(() => {
            res.redirect('/member/login');
        }, 2000); // 2초 (2000 밀리초) 후에 리다이렉션
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: '회원가입 실패' });
    }
});

// POST 로그인 요청 처리
app.post('/login', async (req, res) => {
    const { id, pw } = req.body;

    try {
        // MongoDB 클라이언트 객체를 가져옴
        const client = await connectToMongoDB();
        const db = client.db('you');

        // MongoDB에서 사용자 정보 조회
        const user = await db.collection('users').findOne({ id });

        if (user) {
            // 사용자가 존재하는 경우 비밀번호 일치 여부 확인
            if (user.pw === pw) {
                // 사용자 확인 성공
                // 여기에서 세션 설정 또는 토큰 발급을 수행해야 합니다.
                // 예를 들어, Express.js 세션을 사용하여 세션 설정을 수행할 수 있습니다.
                // 세션 설정 코드를 추가해야 합니다.

                // 로그인 성공 메시지를 출력
                res.send('로그인 성공, 메인 페이지로 이동합니다...<script>window.location.href = "/";</script>');
            } else {
                // 비밀번호 불일치
                res.status(401).json({ message: '로그인 실패: 비밀번호가 일치하지 않습니다.' });
            }
        } else {
            // 사용자가 존재하지 않음
            res.status(401).json({ message: '로그인 실패: 아이디가 존재하지 않습니다.' });
        }

        // 사용이 끝난 MongoDB 클라이언트 닫기
        client.close();
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: '로그인 과정에서 오류가 발생했습니다.' });
    }
});

// 라우터를 앱에 연결
app.use('/', router);

// MongoDB 연결 함수 호출
connectToMongoDB()
    .then(() => {
        // 서버 시작
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });