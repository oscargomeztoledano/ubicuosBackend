var mongoose = require("mongoose");
var schema = mongoose.Schema;

var contaminacionAcusticaSchema = new schema({
    fecha: String,
    nmt:Number,
    nombre: String,
    Ld: String,
    Le: String,
    Ln: String,
    LAeq24: String,
    LAS01: String,
    LAS10: String,
    LAS50: String,
    LAS90: String,
    LAS99: String,
});

module.exports = mongoose.model('contaminacionAcustica', contaminacionAcusticaSchema);
