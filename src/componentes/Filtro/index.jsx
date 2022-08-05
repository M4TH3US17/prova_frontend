import React from 'react';
import './style.css';

export default function Filtro() {
    return (
        <nav className='carros-filtro-container'>
            <div className="container d-flex justify-content-between container-nav">
            <input type="text" className="form-control-md form-control-search" placeholder='Busque por marca, ano ou modelo'/>

            <select className='form-select form-select-lg mb-2'>
                <option disabled>Filtrar Carros</option>
                <option value='1'>Menor KM</option>
                <option value='2'>Maior KM</option>
                <option value='3'>Menor Preço</option>
                <option value='4'>Mais Novos</option>
            </select>
            </div>
        </nav>
    );
};