import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import React    from 'react';
import Listagem from './pages/Listagem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/carros" element={<Listagem />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;