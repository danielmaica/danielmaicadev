import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    // Adicione mais projetos conforme necessário
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '' },
  ];

  return (
    <main className="bg-projects h-full p-20 flex flex-col items-center justify-center gap-20" id='projects'>
      <h2 className='text-7xl'><strong>Portifólio de Projetos</strong></h2>
      <div className="grid grid-cols-4 gap-10 h-max">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;