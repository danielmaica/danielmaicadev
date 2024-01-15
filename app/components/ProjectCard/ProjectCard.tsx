// components/ProjectCard.tsx
import Link from 'next/link';
import './ProjectCard.css'

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, link }) => {
  return (
    <Link href={link}>

      <div className="card flex flex-col gap-2 p-4 rounded-md justify-center hover:scale-105">
        <img src={thumbnail} alt={title} className=" object-cover rounded-full" />
        <h3 className="text-2xl font-bold text-center" style={{color: "#4A148C"}}>{title}</h3>
        <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum recusandae ut esse? Laborum exercitationem dolorem quis enim dicta quod! Molestiae aut nemo, dolores provident repudiandae quae ex molestias exercitationem?</p>
      </div>

    </Link>
  );
};

export default ProjectCard;
