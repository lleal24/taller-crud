"use strict"; //Significa que vamos s usar el ECMA 6

const mongoose = require("mongoose"); //Invocando módulo mongoose
const Schema = mongoose.Schema; //creador de plantilla

const RecomendadasSchema = new Schema({
    nombre: {
        type: String
    },

    director: {
        type: String
    },

    año: {
        type: Number,
        default: 0
    },

    clasificación: {
        type: String,
        enum: ["G", "PG", "PG-13", "R", "NC-17"]
    },

    género: {
        type: String,
        enum: ["Drama", "Comedia", "Musical", "Romance"]
    },

    protagonistas: {
        type: Array
    },

    país: {
        type: String
    },

    duración: {
        type: Number,
        default: 0
    }
});

const Recomendadas = mongoose.model("recomendadas", RecomendadasSchema); //Nombre que se le va a poner a la colección, y lo creado arriba

module.exports = Recomendadas;
