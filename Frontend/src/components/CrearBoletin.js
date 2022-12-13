import React from "react";
import { Link } from 'react-router-dom';

const CrearBoletin = () => {
    return (
        <div>

        <h1> Crear Boletin</h1>
        <h2> Ingrese información solicitada</h2>

        <input placeholder = "Nombre" />
        <input placeholder = "Horario" />
        <textarea placeholder = "Descripción" />

        <button>Crear Boletin</button>
        <Link to={"/"}>Inicio</Link>

        </div>
    )

}

export default CrearBoletin;