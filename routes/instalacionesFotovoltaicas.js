var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var instalacionesFotovoltaicas= require('../models/InstalacionesFotovoltaicas.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;

// GET all instalacionesFotovoltaicas
router.get("/", function (req, res) {
    instalacionesFotovoltaicas.find().then(function(instalacionesFotovoltaicas){
      res.status(200).json(instalacionesFotovoltaicas)
      debug("GET /instalacionesFotovoltaicas");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /instalacionesFotovoltaicas");
    });
  });
//GET instalacionesFotovoltaicas by id
router.get("/:id", function (req, res) {
    instalacionesFotovoltaicas.findById(req.params.id).then(function(instalacionesFotovoltaicas){
      res.status(200).json(instalacionesFotovoltaicas)
      debug("GET /instalacionesFotovoltaicas/:id");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /instalacionesFotovoltaicas/:id");
    });
  });
module.exports = router;