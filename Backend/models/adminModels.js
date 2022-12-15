import mongoose from "mongoose";
//const mongoose = require("mongoose");


const AdminSchema = mongoose.Schema({
    "nombre": { type: String, required: true, trim: true},
    //direccion: { type: String, required: true, trim: true},
    "telefono": { type: Number, required: true, trim: true},
    //estado:{type:Boolean, required:true, trim:true},
    "usuarioSistema":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" },
    "creador":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
},{timestamps:true});

//definir el modelo
export default mongoose.model("admins", AdminSchema)
//module.exports = mongoose.model("Admin", AdminSchema);
