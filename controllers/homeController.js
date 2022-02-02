const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');


exports.mostrarTrabajos = async (req, res, next) => {

    const vacantes = await Vacante.find().lean();

    if(!vacantes) return next();


    res.render('home', {
        nombrePagina : 'Djobs',
        tagline: 'Encuentra y Publica Fechas para Djs',
        barra: true,
        boton: true,
        vacantes
    })
}