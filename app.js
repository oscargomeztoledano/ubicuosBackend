var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var contenesoresRouter = require('./routes/contenedores');
var contaminacionAcusticaRouter = require('./routes/contaminacionAcustica');
var instalacionesFotovoltaicasRouter = require('./routes/instalacionesFotovoltaicas');
var aforoPersonasRouter = require('./routes/aforoPersonas');
var aforoBicicletasRouter = require('./routes/aforoBicicletas');


var app = express();

var debug = require('debug')('ubicuosBackend:server');


var bodyParser  = require("body-parser");   //nuevo
var cors = require('cors');   //nuevo
app.use(cors());  //nuevo
app.use(bodyParser.json({limit: '50mb'}));  //nuevo
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));   //nuevo

var mongoose=require("mongoose");

require('dotenv').config();

mongoose.connect(
  process.env.URL,
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

app.use("/contenedores", contenesoresRouter);
app.use("/contaminacionacustica", contaminacionAcusticaRouter);
app.use("/instalacionesfotovoltaicas", instalacionesFotovoltaicasRouter);
app.use("/aforopersonas", aforoPersonasRouter);
app.use("/aforobicicletas", aforoBicicletasRouter);


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
