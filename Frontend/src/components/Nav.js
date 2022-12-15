import React from "react";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <nav className='nav'>
            <Link className="text-gray-700  hover:text-gray-500 block text-center text-sm font-bold uppercase" to={"/crear-cuenta"}>Crear Cuenta</Link>
        </nav>
    );
}

export default Nav

