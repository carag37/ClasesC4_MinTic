import mongoose from "mongoose";

const AlumnoSchema = mongoose.Schema({
    "idAlumno":{type: Number, required: true, trim: true, unique:true},
    "nombre": { type: String, required: true, trim: true},
    "direccion": { type: String, required: true, trim: true},
    "telefono": { type: Number, required: true, trim: true},
    "edad": { type: Number, required: true, trim: true},
    "curso": { type: mongoose.Schema.Types.ObjectId, ref: "cursos"},
    "estado":{default: "True", type:Boolean, required:false, trim:true},
    "acudiente": {type: [mongoose.Schema.Types.ObjectId], ref: "acudientes"},
    "creador":{ type: mongoose.Schema.Types.ObjectId, ref: "usuarios" }
    
},{timestamps:true});

//definir el modelo
export default mongoose.model("alumnos", AlumnoSchema)
