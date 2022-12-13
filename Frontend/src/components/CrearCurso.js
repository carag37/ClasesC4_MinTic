import React from "react";
import { Link } from 'react-router-dom';

const CrearCurso = () => {
    return (
        <div>

        <h1> Crear Curso</h1>
        <h2> Ingrese información solicitada</h2>

        <input placeholder = "Nombre" />
        <input placeholder = "Horario" />
        <textarea placeholder = "Descripción" />

        <button>Crear Curso</button>
        <Link to={"/"}>Inicio</Link>

        </div>
    )

}

export default CrearCurso;