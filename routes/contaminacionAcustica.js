var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var contaminacionAcustica= require('../models/ContaminacionAcustica.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;

//Get all contaminacionAcustica
router.get("/", function (req, res) {
    contaminacionAcustica.find().then(function(contaminacionAcustica){
      res.status(200).json(contaminacionAcustica)
      debug("GET /contaminacionAcustica");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /contaminacionAcustica");
    });
  });



module.exports = router;