import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";

import MenuMateria from "./components/Materia/MenuMateria";
import CrearMateria from "./components/Materia/CrearMateria";
import VerMateria from "./components/Materia/VerMateria";
import ActualizarMateria from "./components/Materia/ActualizarMateria";

import MenuCurso from "./components/Curso/MenuCurso";
import CrearCurso from "./components/Curso/CrearCurso";
import VerCurso from "./components/Curso/VerCurso";
import ActualizarCurso from "./components/Curso/ActualizarCurso";

import MenuBoletin from "./components/Boletin/MenuBoletin";
import CrearBoletin from "./components/Boletin/CrearBoletin";
import VerBoletin from "./components/Boletin/VerBoletin";
import ActualizarBoletin from "./components/Boletin/ActualizarBoletin";

import CrearCuenta from "./components/CrearCuenta";
import CrearCuentaIn from "./components/CrearCuentaIn";
import Admin from "./components/Admin";
import Home from "./components/Home";
//import Nav from './components/Nav';


function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/login" exact element = {<Login/>}/>
        <Route path="/crear-cuenta" exact element = {<CrearCuenta/>}/>
        <Route path="/crear-cuenta-in" exact element = {<CrearCuentaIn/>}/>
        <Route path="/admin" exact element = {<Admin/>}/>
        <Route path="/menu-materia" exact element = {<MenuMateria/>}/>
        <Route path="/crear-materia" exact element = {<CrearMateria/>}/>
        <Route path="/ver-materia" exact element = {<VerMateria/>}/>
        <Route path="/actualizar-materia" exact element = {<ActualizarMateria/>}/>
        <Route path="/menu-curso" exact element = {<MenuCurso/>}/>
        <Route path="/crear-curso" exact element = {<CrearCurso/>}/>
        <Route path="/ver-curso" exact element = {<VerCurso/>}/>
        <Route path="/actualizar-curso" exact element = {<ActualizarCurso/>}/>
        <Route path="/menu-boletin" exact element = {<MenuBoletin/>}/>
        <Route path="/crear-boletin" exact element = {<CrearBoletin/>}/>
        <Route path="/ver-boletin" exact element = {<VerBoletin/>}/>
        <Route path="/actualizar-boletin" exact element = {<ActualizarBoletin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
