var router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login.ejs');
})
router.get('/register', (req, res)=>{
    res.render('register.ejs');
})



module.exports = router;