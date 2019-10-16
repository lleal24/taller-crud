'use strict'

const express = require('express')
const router = express.Router() //Manejador de rutas de Express
const Infantiles = require('../modelo/infantilesModelo')

//AGREGAR -> POST/CREATE
router.post('/', (req, res, next) => {
    //coleccion.insert({})
    Infantiles.create(req.body)
        .then((infantiles) => {
            res.send(infantiles)
        }).catch(next)
})

//ACTUALIZAR -> PUT/UPDATE
router.put('/:id', (req, res, next) => {
    //coleccion.update({})
    Infantiles.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Infantiles.findOne({ _id: req.params.id })
                .then((infantiles) => {
                    res.send(infantiles)
                })
        }).catch(next)
})


//ELIMINAR -> DELETE
router.delete('/:id', (req, res, next) => {

    Infantiles.findOneAndRemove({ _id: req.params.id })
        .then((infantiles) => {
            res.send(infantiles)
        }).catch(next)
})

module.exports = router