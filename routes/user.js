const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow } = require('../controllers/user');

const router = express.Router();

// Post /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow); // 위 코드를 그대로 응용했지만 에러가 걸려 다른 코드를 참고해서 코드를 만듬

module.exports = router;