const { User } = require('../models/User');


let auth = (req, res, next) => {
 //쿠키에서 토큰을 가져오기
let token = req.cookies.x_auth;
 //토큰을 복호화해서 유저 찾기
 User.findByToken(token, (err, user) => {
     if(err) throw err;
     if(!user) return res.json({ isAuth : false, error : true})

     req.token = token;
     req.user = user;
     next();
 })
}

module.exports = {auth};