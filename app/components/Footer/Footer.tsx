/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id='contact' className="bottom-0 flex flex-col items-center justify-between gap-10 h-15 w-full p-3 font-semibold opacity-95">

      <div className='flex flex-col gap-3'>
        <h2 className='text-center text-2xl'>Redes Sociais</h2>
        <div className="flex gap-7">

          <a className="flex flex-col items-center w-50 h-90" href="https://github.com/danielmaica" target="_blank" rel="nooperner noreferrer">
            <i className="ci ci-github ci-3x"></i>
            <p>Github</p>
          </a>

          <a className="flex flex-col items-center" href="https://www.linkedin.com/in/daniel-escobar-maicá-8ba4b8186/" target="_blank" rel="nooperner noreferrer">
            <i className="ci ci-linkedin ci-3x"></i>
            <p>Linkedin</p>
          </a>
          
          <a className="flex flex-col items-center" href="https://www.instagram.com/danielmaica.dev/?hl=pt-br" target="_blank" rel="nooperner noreferrer">
            <i className="ci ci-instagram ci-3x"></i>
            <p>Instagram</p>
          </a>

          <a className="flex flex-col items-center" href="https://api.whatsapp.com/send?phone=+5551992058011&text=Ol%C3%A1,%20tenho%20interesse%20em%20te%20contratar%20para%20desenvolver%20um%20projeto." target="_blank" rel="nooperner noreferrer">
            <i className="ci ci-whatsapp ci-3x"></i>
            <p>WhatsApp</p>
          </a>
        </div>
      </div>

      <div>
        <img src="/logo-devdanielmaica.svg" alt="Logo" className="w-400 h-8" />
      </div>
    </footer>
  );
};

export default Footer;