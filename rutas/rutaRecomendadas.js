"use strict";

const express = require("express");
const router = express.Router(); //Manejador de rutas de Express
const Recomendadas = require("../modelo/recomendadasModelo");

//AGREGAR -> POST/CREATE
router.post("/", (req, res, next) => {
  //coleccion.insert({})
  Recomendadas.create(req.body)
    .then(Recomendadas => {
      res.send(Recomendadas);
    })
    .catch(next);
});

// CONSULTAR -> GET / READ
router.get("/:id", (req, res, next) => {
  Recomendadas.findById(req.params.id, (error, Recomendadas) => {
    res.status(200).send({Recomendadas});
  });
});

//ACTUALIZAR -> PUT/UPDATE
router.put("/:id", (req, res, next) => {
  //coleccion.update({})
  Recomendadas.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Recomendadas.findOne({ _id: req.params.id }).then(Recomendadas => {
        res.send(Recomendadas);
      });
    })
    .catch(next);
});

//ELIMINAR -> DELETE
router.delete("/:id", (req, res, next) => {
  Recomendadas.findOneAndRemove({ _id: req.params.id })
    .then(Recomendadas => {
      res.send(Recomendadas);
    })
    .catch(next);
});

module.exports = router;
