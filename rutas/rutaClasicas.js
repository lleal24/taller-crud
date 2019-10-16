'use strict'

const express = require('express')
const router = express.Router() //Manejador de rutas de Express
const Clasicas = require('../modelo/clasicasModelo')

//AGREGAR -> POST/CREATE INSERTAR
router.post('/', (req, res, next) => {
    //coleccion.insert({})
    Clasicas.create(req.body)
        .then((clasicas) => {
            res.send(clasicas)
        }).catch(next)
})

// CONSULTAR => GET / READ 
//collection.find()

router.get('/:id', (req, res, next, ) => {
    Clasicas.findById(req.params.id, (error, clasicas) => {
        res.status(200).send({ clasicas })
    })
})

//ACTUALIZAR -> PUT/UPDATE
router.put('/:id', (req, res, next) => {
    //coleccion.update({})
    Clasicas.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Clasicas.findOne({ _id: req.params.id })
                .then((clasicas) => {
                    res.send(clasicas)
                })
        }).catch(next)
})


//ELIMINAR -> DELETE
router.delete('/:id', (req, res, next) => {

    Clasicas.findOneAndRemove({ _id: req.params.id })
        .then((clasicas) => {
            res.send(clasicas)
        }).catch(next)
})

module.exports = router 


