var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var aforoPersonas= require('../models/AforoPersonas.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;

// GET all aforoPersonas
router.get("/", function (req, res) {
    aforoPersonas.find().then(function(aforoPersonas){
      res.status(200).json(aforoPersonas)
      debug("GET /aforoPersonas");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /aforoPersonas");
    });
  });
//GET aforoPersonas by id
router.get("/:id", function (req, res) {
    aforoPersonas.findById(req.params.id).then(function(aforoPersonas){
      res.status(200).json(aforoPersonas)
      debug("GET /aforoPersonas/:id");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /aforoPersonas/:id");
    });
  });
module.exports = router;
