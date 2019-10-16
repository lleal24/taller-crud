'use strict' //Significa que vamos s usar el ECMA 6

const mongoose = require('mongoose') //Invocando módulo mongoose
const Schema = mongoose.Schema //creador de plantilla

const ClasicasSchema = new Schema({
    nombre: {
        type:String, required: true
    },
    director:{
        type: String
    },
    año:{
        type:Number, default:0 
    },
    clasificacion:{
        type:String, enum: ['A','AA','B','B15', 'C', 'D'] 
    },
    genero:{
        type:Array
    },
	protagonistas:{
		type:Array
	},
	pais:{
		type: String
	},
	duracion:{
		type:Number, default:30
	}


})

const Clasicas = mongoose.model('clasicas', ClasicasSchema) //Nombre que se le va a poner a la colección, y lo creado arriba

module.exports = Clasicas