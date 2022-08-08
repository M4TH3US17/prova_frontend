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
import               './App.css';
import Modify from "./pages/Modify";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"              element={<Login/>}/>
        <Route path="/carros"        element={<Listagem/>}/>
        <Route path="/administracao" element={<Admin/>}/>
        <Route path="/carros/salvar" element={<Modify isUpdate={false}/>}/>
        <Route path="/carros/atualizar/">
          <Route path=":carroId"     element={<Modify isUpdate={true}/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/> 
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;