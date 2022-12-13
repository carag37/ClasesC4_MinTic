import React from "react";
import { Link } from 'react-router-dom';

const CrearMateria = () => {
    return (
        <div>

        <h1> Crear Materia</h1>
        <h2> Ingrese información solicitada</h2>

        <input placeholder = "Nombre" />
        <input placeholder = "Horario" />
        <textarea placeholder = "Descripción" />

        <button>Crear Materia</button>
        <Link to={"/"}>Inicio</Link>

        </div>
    )

}

export default CrearMateria;