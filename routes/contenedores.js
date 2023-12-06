var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var contenedores= require('../models/Contenedores.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;


// GET /contenedores
router.get("/", function (req, res) {
    contenedores.find().then(function(contenedores){
      res.status(200).json(contenedores)
      debug("GET /contenedores");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /contenedores");
    });
  });

module.exports = router;