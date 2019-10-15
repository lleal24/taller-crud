'use strict'

const mongoose = require('mongoose'); //llamado del modulo mongoose

const Schema = mongoose.Schema; //creador de plantilla de modelo mongoose

const estrenosSchema = new Schema({
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

});

//exportacion del esquema
module.exports = mongoose.model('estrenos', estrenosSchema)