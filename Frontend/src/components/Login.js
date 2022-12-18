import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from '../utils/crud';
import swalt from 'sweetalert/dist/sweetalert.min.js';



const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({  //{varible, función} el use state también me inicaliza las variables en las cajas según necesidad (traductor, cambios de moneda, etc.)        
        email: '',
        password: ''
    })

    const { email, password } = usuario;  //para back

    const onChange = (e) => {    //Para leer el contenido que tengo en las cajas a traves de una variable

        setUsuario({    //el useState me limita a cambiar los valores de la variable por acá
            ...usuario, //lo voy a cambiar con lo que se cargue en usuario
            [e.target.name]: e.target.value  //target es una propiedad de Js que me lee todo lo que trae
        })   //Cargo todo el usuario en la e
    }

    const autenticarUsuario = async () => {

        const data = {

            email: usuario.email,
            password: usuario.password

        }
        console.log(data);
        const response = await crud.POST('/api/login', data)

        console.log(response.msg);
        if (response.msg === "El usuario no existe" || response.msg === "El Password es incorrecto" || response.msg === "Se deben diligenciar ambos campos") {

            new swalt({
                title: 'Error',
                text: response.msg,
                icon: 'error',
                button: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }

            })

        }
        else {
            
            const jwt = response.token;
            localStorage.setItem('token', jwt)
            
            //console.log(response.token)
            new swalt({
                title: 'Información',
                text: "Ingreso OK",
                icon: 'success',
                button: {
                    confirm: {
                        text: 'OK',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }

            })

            navigate("/admin");

        }

    }


    const onSubmit = (e) => {  //lo que se ejecuta cuando se presiona el botón
        e.preventDefault(); //evita que la página se cargue constantemente.
        autenticarUsuario();   //nueva función para crear un arreglo de data para enviar al Back
    }


    return (
        <main className="containter mx-auto mt-5 md:mt-20 p- md:flex md:justify-center">
            <div className="md:w-2/3 lg:w-2/5">
                <h1 className="text-3xl block text-center font-bold text-slate-200">
                    CalificAPP - Iniciar Sesión
                </h1>

                <form
                    className="my-10 bg-white shadow-blue-300 rounded-lg p-6"
                    onSubmit={onSubmit}
                >
                    <div className="my-5">
                        <label className="text-2xl font-bold uppercase text-slate-600 block">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email de usuario"
                            className="w-full text-2xl mt-1 p-2 border rounded-lg bg-slate-200 "
                            value={email}
                            onChange={onChange}
                        />

                        <label className="text-2xl mt-3 font-bold uppercase text-slate-600 block">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingrese su contraseña"
                            className="w-full text-2xl mt-1 p-2 border rounded-lg bg-slate-200 "
                            value={password}
                            onChange={onChange}
                        />

                    </div>

                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-blue-600 mb-3 text-2xl w-full p-2 border rounded-lg hover:cursor-pointer hover:bg-blue-500 text-slate-200 font-bold uppercase"
                    />

                    <Link className="text-slate-600 mb-3 hover:text-slate-500 block text-center text-sm font-bold uppercase" to={"/crear-cuenta"}>Crear Cuenta</Link>

                    <Link to={"/cambiar-clave"}
                         className="text-slate-600 mb-3 hover:text-slate-500 block text-center text-sm font-bold uppercase" 
                        >Cambiar Contraseña</Link>


                    <Link className="text-slate-600 mb-3 hover:text-slate-500 block text-center text-sm font-bold uppercase" to={"/"}>Regresar</Link>



                </form>



            </div>
        </main>

    )

}

export default Login;