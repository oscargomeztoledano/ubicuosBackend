var mongoose = require("mongoose");
var schema = mongoose.Schema;

var instalacionesFotovoltaicasSchema = new schema({
    numero: Number,
    cdayuntamiento: Number,
    centro: String,
    direccion: String,
    coorx: Number,
    coory: Number,
    latitud: String,
    longitud: String,
    uso: String,
    adscripcion: String,
    distrito: String,
    potenciaKWh: Number,
    empresaInstaladora: String,
    fechaPuestaMarcha: String});
module.exports = mongoose.model('instalacionesFotovoltaicas', instalacionesFotovoltaicasSchema);