// const express = require("express");
// const router = express.Router();
// const adminController = require("../controllers/adminControllers");

import express from "express";
const router = express.Router();
import { leerAdmin, crearAdmin, actualizarAdmin, borrarAdmin } from "../controllers/adminController.js"; 
import loginMiddleware from "../middleware/loginMiddleware.js";

router.get("/", loginMiddleware, leerAdmin);

router.post( "/", loginMiddleware, crearAdmin);

router.patch("/:id", loginMiddleware, actualizarAdmin);

router.delete("/:id", loginMiddleware, borrarAdmin);

//module.exports = router;
export default router;