const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacantesController = require('../controllers/vacantesController');
const usuariosController = require('../controllers/usuariosController');
const authController = require('../controllers/authController');

module.exports = () => {
    router.get('/', homeController.mostrarTrabajos );

    // crear Vacantes
    router.get('/vacantes/nueva', 
        authController.verificarUsuario,  
        vacantesController.formularioNuevaVacante);
    router.post('/vacantes/nueva', 
        authController.verificarUsuario,
        //vacantesController.validarVacante,
        vacantesController.agregarVacante);

    //Mostrar Vacante
    router.get('/vacantes/:url', vacantesController.mostrarVacante);

    //Editar Vacante
    router.get('/vacantes/editar/:url', 
        authController.verificarUsuario,
        vacantesController.formEditarVacante);
    router.post('/vacantes/editar/:url', 
        authController.verificarUsuario,
        //vacantesController.validarVacante,
        vacantesController.editarVacante);

    //eliminar vacante
    router.delete('/vacantes/eliminar/:id', vacantesController.eliminarVacante);

    // Crear Cuentas
    router.get('/crear-cuenta', usuariosController.formCrearCuenta);
    router.post('/crear-cuenta', usuariosController.validarRegistro, usuariosController.crearUsuario);

    // autenticar usuarios
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.post('/iniciar-sesion', authController.autenticarUsuario);

    //cerrar sesion
    router.get('/cerrar-sesion', 
        authController.verificarUsuario,
        authController.cerrarSesion
    );

    //resetear password (emails)
    router.get('/reestablecer-password', authController.formReestablecerPassword);
    router.post('/reestablecer-password', authController.enviarToken);

    //resetear password almacenar bd
    router.get('/reestablecer-password/:token', authController.reestablecerPassword);
    router.post('/reestablecer-password/:token', authController.guardarPassword);
    //Panel de administracion
    router.get('/administracion', 
        authController.verificarUsuario,
        authController.mostrarPanel);

    // Editar Perfil
    router.get('/editar-perfil', 
        authController.verificarUsuario,
        usuariosController.formEditarPerfil
    );
    router.post('/editar-perfil',
        authController.verificarUsuario,
        //usuariosController.validarPerfil,
        usuariosController.subirImagen,
        usuariosController.editarPerfil
    );

    //recibir mensajes de candidatos
    router.post('/vacantes/:url', 
    vacantesController.subirCV,
    vacantesController.contactar    
    );

    //muestra los candidatos por vacante
    router.get('/candidatos/:id', 
        authController.verificarUsuario,
        vacantesController.mostrarCandidatos
    )

    //buscador de vacantes
    router.post('/buscador', vacantesController.buscarVacante);    


    return router;
}