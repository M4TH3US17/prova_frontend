import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import React    from 'react';
import Listagem from './pages/Listagem';
import './App.css';
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carros"        element={<Listagem/>}/>
        <Route path="/administracao" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;