import React from 'react';
import './style.css';

export default function Filtro() {
    return (
        <div className="carros-filtro-container">
            <select className='form-select form-select-lg mb-3'>
                <option disabled>Filtrar Carros</option>
                <option value='1'>Ano</option>
                <option value='2'>Marca</option>
            </select>
        </div>
    );
};