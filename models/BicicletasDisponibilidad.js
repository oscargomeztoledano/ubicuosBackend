var mongoose = require("mongoose");
var schema = mongoose.Schema;

var bicicletasDisponibilidadSchema = new schema({
    dia: String,
    horasUso: String,
    horasDisp: String,
    horasServicio: String,
    mediaBicisDisp: String,
    usosAbonoAnual: Number,
    usosAbonoOcasional: Number,
    totalUsos: Number,
});

module.exports = mongoose.model('bicicletasDisponibilidad', bicicletasDisponibilidadSchema);