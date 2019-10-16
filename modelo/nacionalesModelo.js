"use strict"

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const NacionalesSchema = new Schema({
    nombre: {
        type: String, required: true
    },
    director: {
        type: String
    },
    año: {
        type: Number, default: 0
    },
    clasificacion: {
        type: String, enum: ["A", "AA", "B", "B15", "C", "D"]
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

const Nacionales = mongoose.model("nacionales", NacionalesSchema)
module.exports = Nacionales
