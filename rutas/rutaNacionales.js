
"use strict"

const express = require("express")
const router = express.Router()
const Nacionales = require("../modelo/nacionalesModelo")

router.post("/", (req, res, next) => {
    Nacionales.create(req.body)
        .then((nacionales) => {
            res.send(nacionales)
        }).catch(next)
})

router.get("/:id", (req, res, next) => {
    Nacionales.findById(req.params.id, (error, nacionales) => {
        res.status(200).send({ nacionales })
    })
})

router.put("/:id", (req, res, next) => {
    Nacionales.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Nacionales.findOne({ _id: req.params.id })
                .then((nacionales) => {
                    res.send(nacionales)
                })
        }).catch(next)

})
router.delete("/:id", (req, res, next) => {
    Nacionales.findByIdAndRemove({ _id: req.params.id })
        .then((nacionales) => {
            res.send(nacionales)
        }).catch(next)
})


module.exports = router