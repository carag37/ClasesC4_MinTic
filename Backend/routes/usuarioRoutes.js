/*const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");*/


import express from "express";
import loginMiddleware from "../middleware/loginMiddleware.js";

const router = express.Router();
//import usuarioController from "../controllers/usuarioController.js"; 

import { leerUsuario, crearUsuario, actualizarUsuario, borrarUsuario } from "../controllers/usuarioController.js";

router.get("/", loginMiddleware, leerUsuario);

//router.post( "/", loginMiddleware, crearUsuario);
router.post( "/", crearUsuario);


router.patch("/:id", loginMiddleware, actualizarUsuario);

router.delete("/:id", loginMiddleware, borrarUsuario);

export default router;
//module.exports = router;