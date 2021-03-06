var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var indexRouter = require('./routes/index');
const expressip = require('express-ip');
var middleware = require('./middleware/authenticate.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressip().getIpInfoMiddleware);

app.use(session({
  secret: 'sekd;alskd;laskd;alw439349iE',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 6000000
  }
}));

app.use(middleware.authopt);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.connect('mongodb://localhost:27017/blogDB', function(err) {
  if (err) throw err;

  console.log('Worked');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
  res.send(err.message + 'We encountered an error processing your request. <a href="http://dylandunn.me">Back to homepage</a>');
});

module.exports = app;
