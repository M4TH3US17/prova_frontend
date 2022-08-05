import React from 'react';
import './style.css';

export default function Filtro() {
    const ordem = [ {id: 1, descricao: 'Menor KM'}, {id: 2, descricao: 'Menor Preço'},
    {id: 3, descricao: 'Maior KM'}, {id: 4, descricao: 'Mais Novos'}
];

    return (
        <nav className='carros-filtro-container'>
            <div className="container d-flex justify-content-between container-nav">
            <input type="text" className="form-control-md form-control-search" placeholder='Busque por marca, ano ou modelo'/>

            <select className='form-select form-select-lg mb-2'>
                <option disabled>Ordenar Carros</option>
                {ordem.map(x => (<option key={x.id}>{x.descricao}</option>))}
            </select>
            </div>
        </nav>
    );
};