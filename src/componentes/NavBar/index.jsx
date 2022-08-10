import React, { useState }      from 'react';
import Logo       from '../../assets/img/Logo/Logo';
import BtnAdmin   from '../Buttons/BtnAdmin';
import BtnSair    from '../Buttons/BtnSair';
import BtnVoltar  from '../Buttons/BtnVoltar';
import BtnSalvar  from '../Buttons/btnSalvar/index';
import './style.css';
import BtnLogin from '../Buttons/BtnLogin';

export default function NavBar({displayBtnLogin = 'none', displayBtnAdmin = 'none', displayBtnSair = 'none', 
displayBtnVoltar = 'none', displayBtnSalvar = 'none'}) {
    const [displayLi, setDisplayLI] = useState('none');
    const [displayX, setDisplayX] = useState('none');
    const [displayBurguer, setDisplayBurguer] = useState('block');

    const handlelick = e => {
        let elementoClicado = e.target;
        let menuMobile = document.querySelector('ul');

        if(elementoClicado.classList.contains('bi-list')) {
            
            if(!menuMobile.classList.contains('show-menu')) {
                 menuMobile.classList.add('show-menu');
                 setDisplayLI('block');
                 setDisplayBurguer('none');
                 setDisplayX('block');
            } 
        }  else if(elementoClicado.classList.contains('bi-x-lg')) {
            menuMobile.classList.remove('show-menu');
            setDisplayLI('none');
            setDisplayBurguer('block');
            setDisplayX('none');
        }
    };

    return (
    <header className='carros-header-container'>
        <nav className='container'>
            <div className='carros-nav-content'>
               <Logo/>

               <div className='menu-desktop'>
                  <BtnLogin  display={displayBtnLogin} />
                  <BtnAdmin  display={displayBtnAdmin} />
                  <BtnSalvar display={displayBtnSalvar}/>
                  <BtnVoltar display={displayBtnVoltar}/>
                  <BtnSair   display={displayBtnSair}  />
               </div>

               <div className='menu-mobile'>
                 <button className='btn btn-burguer' onClick={e => handlelick(e)}>
                 <i className="bi bi-x-lg"     style={{display: displayX}}></i> 
                 <i className='bi bi-list' style={{display: displayBurguer}}></i>
                 </button>
                 <ul>
                    <li style={{display: displayLi}}><BtnLogin  display={displayBtnLogin}/> </li>
                    <li style={{display: displayLi}}><BtnAdmin  display={displayBtnAdmin}/> </li>
                    <li style={{display: displayLi}}><BtnSalvar display={displayBtnSalvar}/></li>
                    <li style={{display: displayLi}}><BtnVoltar display={displayBtnVoltar}/></li>
                    <li style={{display: displayLi}}><BtnSair   display={displayBtnSair}/>  </li>
                 </ul>
               </div>
            </div>
        </nav>
    </header>
    );
};