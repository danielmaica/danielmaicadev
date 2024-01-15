import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects: React.FC = () => {
  const projects = [
    // Adicione mais projetos conforme necessário
    { title: 'Doctor Care', thumbnail: 'https://i.ibb.co/zRYVBXb/doctor-care-thumb.png', link: 'https://doctor-care-snowy.vercel.app/', description: 'Página desenvolvida com base em um projeto dedicado a atender as necessidades específicas de clínicas, hospitais, veterinárias e demais empreendimentos que atuam nestes nichos. Nosso design e funcionalidades foram cuidadosamente pensados destacando os serviços, expertise e valores distintivos desses estabelecimentos.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique justo vel ligula sodales, a vestibulum ligula congue. Curabitur bibendum, quam in bibendum tempus, ex nulla suscipit orci, vel tristique dolor leo eu libero.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Suspendisse nec justo vel ex sagittis pellentesque eu ac mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Ut ut nulla non dolor fermentum malesuada.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Praesent sit amet tellus nec odio vehicula ultricies. Sed sollicitudin metus nec elit euismod, a finibus ex bibendum. Maecenas vitae bibendum ipsum. Nullam euismod tortor vel arcu volutpat, eu interdum dui tristique.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique justo vel ligula sodales, a vestibulum ligula congue. Curabitur bibendum, quam in bibendum tempus, ex nulla suscipit orci, vel tristique dolor leo eu libero.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Suspendisse nec justo vel ex sagittis pellentesque eu ac mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Ut ut nulla non dolor fermentum malesuada.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Praesent sit amet tellus nec odio vehicula ultricies. Sed sollicitudin metus nec elit euismod, a finibus ex bibendum. Maecenas vitae bibendum ipsum. Nullam euismod tortor vel arcu volutpat, eu interdum dui tristique.' },
    { title: 'Projeto', thumbnail: 'https://josevictoremiliano.github.io/meuportifolio/img/breve.png', link: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tristique justo vel ligula sodales, a vestibulum ligula congue. Curabitur bibendum, quam in bibendum tempus, ex nulla suscipit orci, vel tristique dolor leo eu libero.' },
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