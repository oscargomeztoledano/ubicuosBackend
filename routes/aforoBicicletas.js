var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var debug = require('debug')('ubicuosBackend:server');

var aforoBicicletas= require('../models/AforoBicicletas.js');
mongoose.set("strictQuery", false);
var db = mongoose.connection;

// GET all aforoBicicletas
router.get("/", function (req, res) {
    aforoBicicletas.find().then(function(aforoBicicletas){
      res.status(200).json(aforoBicicletas)
      debug("GET /aforoBicicletas");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /aforoBicicletas");
    });
  });
//GET aforoBicicletas by id
router.get("/:id", function (req, res) {
    aforoBicicletas.findById(req.params.id).then(function(aforoBicicletas){
      res.status(200).json(aforoBicicletas)
      debug("GET /aforoBicicletas/:id");
    }).catch(function(err){
      res.status(500).send(err)
      debug("error /aforoBicicletas/:id");
    });
  });
module.exports = router;
