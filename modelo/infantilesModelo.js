'use strict' //Significa que vamos s usar el ECMA 6

const mongoose = require('mongoose') //Invocando módulo mongoose
const Schema = mongoose.Schema //creador de plantilla

const infantilesSchema = new Schema({
    nombre: {
        type: String, require: true
    },
    director: {
        type: String
    },
    año: {
        type: Number, default: 0
    },
    clasificacion: {
        type: String, enum: ['A', 'AA', 'B', 'B15', 'C', 'D']//Volver SELECTIVA la base de datos
    },
    genero: {
        type: Array
    },
    protagonistas: {
        type: Array
    },
    pais: {
        type: String
    },
    duracion: {
        type: Number, default: 30
    }
})

const Infantiles = mongoose.model('infantiles', infantilesSchema)//Nombre que se le va a poner a la colección, y lo creado arriba

module.exports = Infantiles