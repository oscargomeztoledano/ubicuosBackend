var mongoose = require("mongoose");
var schema = mongoose.Schema;

var aforoPersonasSchema = new schema({
    fecha: String,
    hora: String,
    identficador: String,
    peatones: Number,
    numDistrito: Number,
    distrito: String,
    via: String,
    num: Number,
    codigoPostal: Number,
    observaciones: String,
    Latitud: String,
    Longitud: String,
});
module.exports = mongoose.model('aforoPersonas', aforoPersonasSchema);