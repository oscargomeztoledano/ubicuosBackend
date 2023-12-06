var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var bicicletasDisponibilidad= require('../models/BicicletasDisponibilidad.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;

// GET all bicicletasDisponibilidad
router.get("/", function (req, res) {
    bicicletasDisponibilidad.find().then(function(bicicletasDisponibilidad){
      res.status(200).json(bicicletasDisponibilidad)
      debug("GET /bicicletasDisponibilidad");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /bicicletasDisponibilidad");
    });
  });
//GET bicicletasDisponibilidad by id
router.get("/:id", function (req, res) {
    bicicletasDisponibilidad.findById(req.params.id).then(function(bicicletasDisponibilidad){
      res.status(200).json(bicicletasDisponibilidad)
      debug("GET /bicicletasDisponibilidad/:id");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /bicicletasDisponibilidad/:id");
    });
  });
module.exports = router;