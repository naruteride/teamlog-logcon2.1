const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const redis = require('redis');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const indexRouter = require('./routes/index');
const rankRouter = require('./routes/rank');
const myPageRouter = require('./routes/mypage');
const noticeRouter = require('./routes/notice');
const loginRouter = require('./routes/login');
const challengeRouter = require('./routes/challenge');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const registerRouter = require('./routes/register');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logoutRouter = require('./routes/logout');
const helpRouter = require('./routes/help');
const client = redis.createClient(6379,'127.0.0.1'); //포트번호와 호스트

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '122345564fasdfafa54fsadaf', //사용자의 세션아이디 값
  resave: false,  //재접속 시 세션아이디 재발급x
  saveUninitialized: true,  //세션 사용 전까지 세션아이디 발급x
  store : new redisStore({
    client : client,
    ttl : 260
  }) 
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/rank',rankRouter);
app.use('/mypage',myPageRouter);
app.use('/notice', noticeRouter);
app.use('/login',loginRouter);
app.use('/challenge',challengeRouter);
app.use('/auth',authRouter);
app.use('/admin',adminRouter);
app.use('/register',registerRouter);
app.use('/logout',logoutRouter);
app.use('/help',helpRouter);
app.set('view engine', 'html');
app.set('view engine', 'ejs');

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(helmet()); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404.ejs');
});

app.listen(3000, /*"0.0.0.0",*/ () => {
  console.log("connect");
});

module.exports = app;