const express = require('express');
const path = require('path')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../views', 'index.html'));
  /*if((req.session.user === undefined)){
    res.render('index.html',{
      score : '0',
      user_id : 'guest',
      user_school: 'undefined'
    });
  }
  else{
    if(!(req.session.flag))
        res.redirect('/auth');
    else{
        res.render('index.html',{
          score : req.session.score,
          user_id : req.session.user,
          user_school: req.session.school
        })
      }
  }*/
});

module.exports = router;
