/* eslint-disable @next/next/no-img-element */
import React from 'react';

const About: React.FC = () => {
  return (
    <main className="bg-about h-full p-20 flex items-center justify-center gap-20" id='about'>
      <div className="">
        <img className='rounded-full img-shadow' width="450rem" src="./me.jpg" alt="foto de daniel" />
      </div>
      <div className="max-w-3xl text-justify">
        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-4xl">Olá! Meu nome é <strong className='text-6xl'>Daniel Maicá</strong>.</p>
        <p className='text-3xl'>Eu sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras.</p>
        <br />
        <p className='text-2xl'>Amo transformar desejos e sonhos em experiências digitais memoráveis. Acredito que a tecnologia tem o poder único de dar vida a ideias e conectar pessoas de maneiras significativas.</p>
      </div>
    </main>
  );
};

export default About;