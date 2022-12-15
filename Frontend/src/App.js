import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import CrearMateria from "./components/CrearMateria";
import CrearCurso from "./components/CrearCurso";
import CrearBoletin from "./components/CrearBoletin";
import CrearCuenta from "./components/CrearCuenta";
//import Nav from './components/Nav';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element = {<Login/>}/>
        <Route path="/crear-cuenta" exact element = {<CrearCuenta/>}/>
        <Route path="/crear-materia" exact element = {<CrearMateria/>}/>
        <Route path="/crear-curso" exact element = {<CrearCurso/>}/>
        <Route path="/crear-boletin" exact element = {<CrearBoletin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
