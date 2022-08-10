import React          from 'react';
import {useNavigate}  from 'react-router-dom';
import UsuarioService from '../../../services/UsuarioService';
import                     './style.css';

const usuarioService = new UsuarioService();

export default function BtnSair({display = 'none'}) {
    let navigate = useNavigate();

    const handleClick = () => {
        usuarioService.logout();
        window.location.reload();
        navigate("/");
    }

    return (
        <>
         <button className='btn btn-sair btn-nav' style={{display: display}} onClick={handleClick}>Logout <i className="bi bi-x-circle"></i></button>
        </>
    )
};