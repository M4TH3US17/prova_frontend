import React          from 'react';
import {useNavigate}  from 'react-router-dom';
import UsuarioService from '../../../services/UsuarioService';
import                     './style.css';

const usuarioService = new UsuarioService();

export default function BtnSair({display = 'none'}) {
    let navigate = useNavigate();

    const handleClick = () => {
        usuarioService.logout();
        navigate("/");
    }

    return (
        <>
         <button className='btn btn-sair' style={{display: display}} onClick={handleClick}>Sair</button>
        </>
    )
};