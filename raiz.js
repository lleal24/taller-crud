'use strict' //Necesario para especificar EMAC Script6

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    estrenos = require('./rutas/rutaEstrenos'),
    infantiles = require('./rutas/rutaInfantiles'),
    clasicas = require('./rutas/rutaClasicas'),
    recomendadas = require('./rutas/rutaRecomendadas'),
    nacionales = require('./rutas/rutaNacionales'),

    app = express()   ,
    PORT = 3000,
    BD = 'peliculas'

mongoose.connect('mongodb://localhost:27017', {
    dbName: BD,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log(`Pudimos ingresar a la base de datos <<${BD}>> con exito!!`)
}).catch((err) => {
    console.log(`No hay conexion:${err}`)
})  


// ----- CONEXION A LA BD LINUX ------------------------------
//Observacion: para esta version es necesario pasarle esos parametros useNewUrlParser y useUnifiedTopology
/* mongoose.connect("mongodb://localhost:27017/peliculas", { useNewUrlParser: true, useUnifiedTopology: true }) //conexion si no esta la db mongo la crea
    // ------ PROMESAS -------------------------------------
    .then(db => console.log('DB connected')) //Si se conecta
    .catch(err => console.log(err)); //Si falla la conexion

    app.set('port', process.env.PORT || 3030)
 */

// ------------CONFIGURACION PARA POSTMAN DE RUTAS-------------------------------------------
app.use(bodyParser.json()); 
app.use('/api/estrenos', estrenos); 
app.use('/api/infantiles', infantiles);
app.use('/api/clasicas', clasicas); 
app.use('/api/recomendadas', recomendadas);
app.use('/api/nacionales', nacionales);
//----------------------------------------------------------------------------------


app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message }) //422 errores de semantica
});

//starting the server on LINUX
/* app.listen(app.get('port'), () => { //app.listen(puerto , ()=>{Mensaje a mostrar})
    console.log(`Server on port ${app.get('port')}`)
}); */
//----------------------------------------------------------------------------------
 
app.listen(PORT, () => {
    console.log(`Cuidado estamos usando el Puerto ${PORT}`)
})  
