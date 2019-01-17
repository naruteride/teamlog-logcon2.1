const express = require('express');
const db = require('../db/connection');
const path = require('path');
const router = express.Router();

router.get('/',(req,res) => {
    console.log('sival')
    db.query('select SCORE,SCHOOL,ID,PROFILE_COMMENT from Users', (err,result) => {
        if (err) throw err;
        if(!(req.session.user === undefined)){
            if(!(req.session.flag))
                res.redirect('/auth');
            else{
                res.render('rank.ejs',{
                    user_id : result[0].ID,
                    user_school : result[0].SCHOOL,
                    score : result[0].SCORE,
                    users : result
                });
            }
        }
        else{
            res.render('rank.ejs',{
                users : result,
                user_id : 'guest',
                user_school : 'undefined',
                score : 0
            });
        }
    });
})

module.exports = router;