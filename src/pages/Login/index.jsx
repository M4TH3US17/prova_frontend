import React, { useEffect, useState }     
                      from 'react';
import NavBar         from '../../componentes/NavBar';
import UsuarioService from '../../services/UsuarioService';
import {useNavigate}  from 'react-router-dom';
import                     './style.css';
import { toast } from 'react-toastify';

const usuarioService = new UsuarioService();

export default function Login() {
    const [username, setUsername] = useState('');
    const [senha, setSenha]       = useState('');
    let navigate                  = useNavigate();

    useEffect(() => {if(usuarioService.estaAutenticado()) navigate("/administracao", {replace: true})},[])

    const handleSubmit = e => {
        e.preventDefault();
    
        usuarioService.login({login: username, senha})
            .then(()  =>  {navigate("/administracao")})
            .catch(() => toast.error('Usuário não encontrado.'));
    };

    return (
    <>
     <NavBar/>
     <section className="carros-form-container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="mb-2">
                    <label htmlFor='username'>Login</label>

                    <input 
                    type="text" 
                    className="form-control"
                    onChange={e => setUsername(e.target.value)} 
                    id="username" 
                    placeholder=" Usuário" 
                    required/>
                </div>

                <div className="mb-2">
                    <label htmlFor="password">Senha</label>

                <input 
                    type="password" 
                    onChange={e => setSenha(e.target.value)} 
                    className="form-control" 
                    id="password" 
                    placeholder=" Senha" 
                    required/>
                </div>

                <div>
                    <button className="btn btn-md btn-primary mb-2 btn-login" type="submit">Enviar</button>
                </div>
            </form>
         </section>
    </>);
};