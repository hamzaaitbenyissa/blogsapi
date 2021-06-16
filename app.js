var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var commentsRouter = require('./routes/comments');
var tagsRouter = require('./routes/tags');
var authrouter=require('./routes/auth');
var AuthU=require('./middlewares/auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/users',AuthU, usersRouter);
app.use('/articles',AuthU, articlesRouter);
app.use('/comments',AuthU, commentsRouter);
app.use('/tags',AuthU, tagsRouter);
app.use('/auth',authrouter);

module.exports = app;
