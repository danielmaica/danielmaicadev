/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 h-15 w-full p-4 bg-black bg-opacity-20 font-semibold">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/logo-devdanielmaica.svg" alt="Logo" className="w-400 h-8 mr-2" />
        
        <nav className="flex items-center space-x-4">
          <a href="#about" className="hover:text-purple-500 hover:cursor-pointer">Sobre</a>
          <a href="#technologies" className="hover:text-purple-500 hover:cursor-pointer">Tecnologias</a>
          <a href="#projects" className="hover:text-purple-500 hover:cursor-pointer">Projetos</a>
          <a href="#contact" className="hover:text-purple-500 hover:cursor-pointer">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;