const express = require('express');
const db = require('../db/connection');
const crypto = require('crypto');
const router = express.Router();

router.post('/',(req,res)=>{
    const id = req.body.id;
    var tmpPw = req.body.pw;
    const pw = crypto.createHash('sha512').update(tmpPw).digest('base64');
    db.query('select * from Users where ID = ? and PW = ?' , [id,pw], (err, result) => {
		if (err) throw err;
        if(result.length === 0){
            res.send('<script type="text/javascript">alert("로그인 실패!(# `)3′)";window.location.href="login";</script>');
        }
        else {
            req.session.user = id;
            req.session.school = result[0].SCHOOL;
            req.session.flag = result[0].FLAG;
            req.session.score = result[0].SCORE;
            req.session.save(() => {
                res.redirect('/');
			})
        }  
    })
})

module.exports = router;
