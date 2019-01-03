const express = require('express');
const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
const db = require('../db/connection');
const crypto = require('crypto');
const router = express.Router();

router.get('/',(req,res) => {
    if(!(req.session.user === undefined)){
        res.render('register.ejs',{
            user_id : req.session.user,
            user_school : req.session.school
        });
    }
    else{
        res.render('register.ejs',{
            user_id : 'guest',
            user_school : 'undefined'
        })
    }
})
.post('/',(req,res) => {
    const tmpId = req.body.id;
    const pw = req.body.pw;
    const tmpEmail = req.body.email;
    const tmpSchool = req.body.school;
    const tmpPwd = crypto.createHash('sha512').update(pw).digest('base64');
    if(tmpId===''||tmpPwd===''||tmpEmail===''||tmpSchool === ''||tmpGrade === '')
        res.send('<script type="text/javascript">alert("입력되지 않은 값이 있어요!(*•̀ᴗ•́*)");window.location.href="register";</script>');
    if(pw.length<8||pw.length>20||tmpId.length>20||tmpId.length<5)
        res.send('<script type="text/javascript">alert("아이디나 패스워드의 길이를 맞춰주세요!(´ヘ｀()");window.location.href="register";</script>');
    else{
        db.query('select SCORE from Users where ID = ?', tmpId, (err, result) => {
			if(err) console.error(err);
			if(!(result.length===0))
                res.send('<script type="text/javascript">alert("중복되는 아이디에요!(•⊙ω⊙•)");window.location.href="register";</script>');
            else{
                db.query('select SCORE from Users where EMAIL = ?',tmpEmail, (error,results) => {
                    if(error) throw error;
                    if(!(results.length===0))
                        res.send('<script type="text/javascript">alert("중복되는 이메일이에요!( ･ὢ･ )");window.location.href="register";</script>');
                    else{
                        const authkey = randomstring.generate();
                        db.query('insert into Users (ID,PW,EMAIL,SCHOOL,AUTHKEY,GRADE) values (?,?,?,?,?,?)',[tmpId,tmpPwd,tmpEmail,tmpSchool,authkey,tmpGrade]);
                        res.send('<script type="text/javascript">alert("회원가입 성공!ヾ|๑╹◡╹๑|ﾉ");window.location.href="login";</script>');
                        const transporter = nodemailer.createTransport({
                            service: 'Gmail',
                            auth: {
                                user: 'teamlogsr@gmail.com', 
                                pass: 'teamlogzzang2017'
                            }
                        });
                        const mailOptions = {
                            from: 'teamlogsr@gmail.com',
                            to: tmpEmail ,
                            subject: 'LOGCON 인증',
                            text: '가입완료를 위해 <'+authkey+'> 를 입력해주세요'
                        };
                        transporter.sendMail(mailOptions, (err, response) => {
                            if(err)
                                console.log(err);
                            else{
                                console.log('sibal',response);
                            }   
                        })    
                    }
                })
            }
        })
    }
})

module.exports = router;
