import React      from 'react';
import Logo       from '../../assets/img/Logo/Logo';
import BtnAdmin   from '../Buttons/BtnAdmin';
import BtnSair    from '../Buttons/BtnSair';
import BtnVoltar  from '../Buttons/BtnVoltar';
import './style.css';

export default function NavBar({displayBtnAdmin = 'none', displayBtnSair = 'none', 
displayBtnVoltar = 'none'}) {

    return (
    <header className='carros-header-container'>
        <nav className='container'>
            <div className='carros-nav-content'>
              <Logo/>

               <div className='d-flex'>
                  <BtnAdmin  display={displayBtnAdmin}/>
                  <BtnVoltar display={displayBtnVoltar}/>
                  <BtnSair   display={displayBtnSair}/>
               </div>
            </div>
        </nav>
    </header>
    );
};