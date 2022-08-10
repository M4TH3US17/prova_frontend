import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnSalvar({display = 'none'}) {
    return (<Link className="btn btn-nav" to="/carros/salvar" style={{display: display}}>Criar <i className="bi bi-plus-circle"></i></Link>);
}