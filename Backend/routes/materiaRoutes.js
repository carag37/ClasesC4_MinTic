import express from "express";
import { leerMateria, crearMateria, actualizarMateria, borrarMateria } from "../controllers/materiaController.js";
import loginMiddleware from "../middleware/loginMiddleware.js";

const materiaRoutes = express.Router()

//Crear
//Crear
//POST
materiaRoutes.post("/", loginMiddleware, crearMateria)
//Leer
//GET
materiaRoutes.get("/", loginMiddleware,  leerMateria)
//Actualizar
//PUT
materiaRoutes.patch("/", loginMiddleware, actualizarMateria)
//Eliminar
//DELETE
materiaRoutes.delete("/", loginMiddleware, borrarMateria)

export default materiaRoutes;