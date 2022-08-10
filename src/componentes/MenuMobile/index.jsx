import React, { useState } 
                 from 'react';
import BtnAdmin  from '../Buttons/BtnAdmin';
import BtnLogin  from '../Buttons/BtnLogin';
import BtnSair   from '../Buttons/BtnSair';
import BtnVoltar from '../Buttons/BtnVoltar';
import BtnSalvar from '../Buttons/btnSalvar';
import './style.css';

export default function MenuMobile({displayBtnLogin = 'none', displayBtnAdmin = 'none', displayBtnSalvar='none',
displayBtnVoltar='none', displayBtnSair='none'}) {

    const [displayLi, setDisplayLI] = useState('none');
    const [displayX, setDisplayX] = useState('none');
    const [displayBurguer, setDisplayBurguer] = useState('block');

    const handleClick = e => {
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
        <div className='menu-mobile'>
            <button className='btn btn-burguer' onClick={e => handleClick(e)}>
                <i className="bi bi-x-lg" style={{display: displayX}}></i> 
                <i className='bi bi-list' style={{display: displayBurguer}}></i>
            </button>

            <ul>
             <li style={{display: displayLi}}><BtnLogin   display={displayBtnLogin}/> </li>
             <li style={{display: displayLi}}><BtnAdmin   display={displayBtnAdmin}/> </li>
             <li style={{display: displayLi}}><BtnSalvar  display={displayBtnSalvar}/></li>
              <li style={{display: displayLi}}><BtnVoltar display={displayBtnVoltar}/></li>
             <li style={{display: displayLi}}><BtnSair    display={displayBtnSair}/>  </li>
            </ul>
        </div>
    );
}