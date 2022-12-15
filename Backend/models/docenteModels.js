//const mongoose = require("mongoose");

import mongoose from "mongoose";

const DocenteSchema = mongoose.Schema({
    "nombre": { type: String, required: true, trim: true},
    "direccion": { type: String, required: true, trim: true},
    "telefono": { type: Number, required: true, trim: true},
    "materias": {type: [mongoose.Schema.Types.ObjectId], ref: "materias"},
    "estado":{type:Boolean, required:true, trim:true},
    "usuarioSistema":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios", required : true },
    "creador":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
    
},{timestamps:true});

//definir el modelo
export default mongoose.model("docentes", DocenteSchema);

//module.exports = mongoose.model("Docente", DocenteSchema);
