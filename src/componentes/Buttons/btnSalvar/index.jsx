import React from 'react';
import { Link } from 'react-router-dom';

export default function BtnSalvar({display = 'none'}) {
    return (<Link className="btn" to="/carros/salvar" style={{display: display}}>Criar</Link>);
}