import {
  BrowserRouter as Router, 
  Routes, 
  Route
}               from "react-router-dom";
import React    from 'react';
import Listagem from './pages/Listagem';
import Admin    from "./pages/Admin";
import Page404  from "./pages/Page404";
import Login    from "./pages/Login";
import UsuarioService from '../src/services/UsuarioService';
import               './App.css';
import Modify from "./pages/Modify";

const usuarioService = new UsuarioService();

function App() {
  let estaAutenticado = usuarioService.estaAutenticado();

  return (
    <Router>
      <Routes>
        <Route path="/"              element={<Login/>}/>
        <Route path="/carros"        element={<Listagem  usuarioLogado={estaAutenticado}/>}/>
        <Route path="/administracao" element={<Admin     usuarioLogado={estaAutenticado}/>}/>
        <Route path="/carros/salvar" element={<Modify    isUpdate={false} usuarioLogado={estaAutenticado}/>}/>
        <Route path="/carros/atualizar/">
          <Route path=":carroId" element={<Modify isUpdate={true} usuarioLogado={estaAutenticado}/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  );
};

export default App;