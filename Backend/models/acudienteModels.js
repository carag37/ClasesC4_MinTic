import mongoose from "mongoose";

const AcudienteSchema = mongoose.Schema({
    "idAcudiente":{type: Number, required: true, trim: true, unique:true},
    "nombre": { type: String, required: true, trim: true},
    "direccion": { type: String, trim: true},
    "telefono": { type: Number, required: true, trim: true},
    "alumno":   { type: [mongoose.Schema.Types.ObjectId], ref: "alumnos"},
    //parentesco: { type: String, required: true, trim: true},
    //estado:{type:Boolean, required:true},
    "usuarioSistema":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" },
    "creador":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
},{timestamps:true});

//definir el modelo
export default mongoose.model("acudientes", AcudienteSchema);

//module.exports = mongoose.model("Acudiente", AcudienteSchema);
