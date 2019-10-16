//CRUD Estrenos
'use strict'

//MODULOS NECESARIO
const express = require('express');
const router = express.Router(); //manejador de ruts
const Estrenos = require('../modelo/estrenosModelo'); //modelo estrenos '../modelo/estrenosModelo'

//-------------------------------------------------------------------------
// CREATE - METODO: POST / AGREGAR ESTRENO
router.post('/',(req, res, next)=>{
    Estrenos.create(req.body)
    .then((estrenos)=>{
        res.send(estrenos);
    }).catch(next);
});
//-------------------------------------------------------------------------
// READ - METODO: GET / CONSULTAR
router.get('/:id',(req,res,next)=>{
    Estrenos.findById(req.param.id,(error, estrenos)=>{
        res.status(200).send({estrenos});
    });
});
//-------------------------------------------------------------------------
// UPDATE - METODO: PUT / ACTUALIZAR
router.put('/:id',(req,res,next)=>{
    Estrenos.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        Estrenos.findOne({_id: req.params.id})
        .then((estrenos)=>{
            res.send(estrenos);
        })
    }).catch(next);
});
//--------------------------------------------------------------------------------
// DELETE - NETODO: DELETE / ELIMINAR
router.delete('/:id',(req,res,next)=>{
    Estrenos.findOneAndRemove({_id: req.params.id})
    .then((estrenos)=>{
        res.send(estrenos)
    }).catch(next);
});

module.exports = router


