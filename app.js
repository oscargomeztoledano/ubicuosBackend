var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose");
var debug = require('debug')('ubicuosBackend:server');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contenesoresRouter = require('./routes/contenedores');
var contaminacionAcusticaRouter = require('./routes/contaminacionAcustica');
var instalacionesFotovoltaicasRouter = require('./routes/instalacionesFotovoltaicas');

var app = express();
mongoose.connect(
    "mongodb+srv://oscargomez1ari:1234@clusterubicuos.qm4rldd.mongodb.net/proyectoUbicuos",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => debug("MongoDB Atlas DataBase connection successful"))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/contenedores", contenesoresRouter);
app.use("/contaminacionacustica", contaminacionAcusticaRouter);
app.use("/instalacionesfotovoltaicas", instalacionesFotovoltaicasRouter);


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
  res.render('error');
});

module.exports = app;
