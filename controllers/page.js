const { User, Post, Hashtag } = require('../models');

exports.renderProfile = (req,res) => {
    res.render('profile', { title: '내 정보 - NodeBird' });
};

exports.renderJoin = (req,res) => {
    res.render('join', { title: '회원 가입 - NodeBird' });
};

exports.renderMain = async (req, res, next) => {
    let posts = [];
    try{
        posts = await Post.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main', {
            title: 'NodeBird',
            twits: posts,
        });
    } catch(err){
        console.error(err);
        next(err);
    }
};

exports.renderHashtag = async (req,res,next) => {
    const query = req.query.hashtag;
    if (!query) {
        return res.redirect('/');
    }
    try {
        const hashtag = await Hashtag.findOne({ where: { title: query } });
        let posts = [];
        if (hashtag) {
            posts = await hashtag.getPosts({ include: [{ model: User }] });
        }

        return res.render('main', {
            title: `${query} | NodeBird`,
            twits: posts,
        });
    } catch (error) {
        console.error(error);
        return next(error);
    }
};

exports.renderUser = async (req,res,next) => {
    const query = req.query.user; // model hashtag가 아닌 user로 변경
    if (!query) {
        return res.redirect('/');
    }
    try {
        const user = await User.findOne({ where: { nick: query } }); // title을 nick으로 변경해야 nick을 검색함
        let posts = [];
        if (user) {
            posts = await user.getPosts({ include: [{ model: User }] });
        }

        return res.render('main', {
            title: `${query} | NodeBird`,
            twits: posts,
        });
    } catch (error) {
        console.error(error);
        return next(error);
    }
};