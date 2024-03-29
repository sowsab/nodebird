const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { join, login, logout, mod } = require('../controllers/auth');

const router = express.Router();

router.post('/join', isNotLoggedIn, join);

router.post('/login', isNotLoggedIn, login);

router.post('/logout', isLoggedIn, logout);

router.post('/mod', isLoggedIn, mod); // 로그인 정보 변경 라우터

router.get('/logout', isLoggedIn, logout);

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/?loginError=카카오로그인 실패'
}), (req,res) => {
    res.redirect('/');
});

module.exports = router;