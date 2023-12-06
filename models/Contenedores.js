var mongoose = require("mongoose");
var schema = mongoose.Schema;

var contenedoresSchema = new schema({
    codigo: Number,
    tipo: String,
    descripcion: String,
    cantidad: Number,
    lote: Number,
    distrito: String,
    tipoVia: String,
    nombre: String,
    numero: Number,
    coorx: String,
    coory: String,
    longitud: String,
    latitud: String,
    direccion: String
});

module.exports = mongoose.model('contenedores', contenedoresSchema);