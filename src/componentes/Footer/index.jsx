import React from 'react';
import './style.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
          <div className='container'>
            <div className='d-flex justify-content-between'>
              <div>
                <span><a href="https://www.instagram.com/math3us.css/" target={"_blank"} className='footer-link'><i className="bi bi-instagram"></i></a></span>
                <span><a href="https://www.linkedin.com/in/matheus-dalvino-478400207/" target={"_blank"} className='footer-link'><i className="bi bi-linkedin"></i></a></span>
                <span><a href="https://github.com/M4TH3US17" target={"_blank"} className='footer-link'><i className="bi bi-git"></i></a></span>
              </div>

              <h2 className='footer-author'>Matheus Dalvino</h2>
            </div>
            <hr/>
          </div>
        </footer>)
}