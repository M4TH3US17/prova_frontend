import React      from 'react';
import Logo       from '../../assets/img/Logo/Logo';
import BtnAdmin   from '../Buttons/BtnAdmin';
import BtnSair    from '../Buttons/BtnSair';
import BtnVoltar  from '../Buttons/BtnVoltar';
import BtnSalvar  from '../Buttons/btnSalvar/index';
import './style.css';

export default function NavBar({displayBtnAdmin = 'none', displayBtnSair = 'none', 
displayBtnVoltar = 'none', displayBtnSalvar = 'none'}) {

    return (
    <header className='carros-header-container'>
        <nav className='container'>
            <div className='carros-nav-content'>
              <Logo/>

               <div className='d-flex'>
                  <BtnAdmin  display={displayBtnAdmin}/>
                  <BtnSalvar display={displayBtnSalvar}/>
                  <BtnVoltar display={displayBtnVoltar}/>
                  <BtnSair   display={displayBtnSair}/>
               </div>
            </div>
        </nav>
    </header>
    );
};