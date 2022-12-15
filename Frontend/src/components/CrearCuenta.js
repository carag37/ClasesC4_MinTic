import React from "react";
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
    return (

        <main className="containter mx-auto mt-5 md:mt-20 p- md:flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
                <h1 className="text-3xl block text-center bg-gradient-to-r  from-violet-500 via-gray-300 to-violet-500 text-transparent bg-clip-text ">
                    CalificAPP - Crear Cuenta
                </h1>

                <form className="my-10 bg-white shadow-cyan-300 rounded-lg p-6">

                    <div className="my-5">

                        <label className="text-xl mt-3 font-bold uppercase text-gray-600 block">Nombre</label>
                        <input type="nombre" placeholder="Nombre de usuario"
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100 " />

                        <label className="text-xl mt-3 font-bold uppercase text-gray-600 block">Email</label>
                        <input type="email" placeholder="Email de usuario"
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100 " />

                        <label className="text-xl mt-3 font-bold uppercase text-gray-600 block">Contraseña</label>
                        <input type="password" placeholder="Ingrese su contraseña"
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100 " />

                        <label className="text-xl mt-3 font-bold uppercase text-gray-600 block">Confirme Contraseña</label>
                        <input type="password" placeholder="Confirme su contraseña"
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100 " />

                        <label className="text-xl mt-3 font-bold uppercase text-gray-600 block">Tipo Usuario</label>
                        <input type="Tipo Usuario" placeholder="Tipo Usuario"
                            className="w-full mt-1 p-2 border rounded-lg bg-gray-100 " />

                    </div>

                    <input
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-violet-600 mb-3 w-full p-2 border rounded-lg hover:cursor-pointer hover:bg-violet-500 text-white font-bold uppercase"
                    />

                    <Link className="text-gray-700  hover:text-gray-500 block text-center text-sm font-bold uppercase" to={"/"}>Regresar</Link>


                </form>



            </div>
        </main>



    )

}

export default CrearCuenta;