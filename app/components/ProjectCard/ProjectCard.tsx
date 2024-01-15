// components/ProjectCard.tsx
import Link from 'next/link';
import './ProjectCard.css'

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  link: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, link, description }) => {
  return (
    <Link href={link} target='_blank'>

      <div className="card flex flex-col gap-2 p-5 rounded-md justify-start gap-5 hover:scale-105">
        <img src={thumbnail} alt={title} className=" object-cover rounded-full" />
        <h3 className="text-2xl font-bold text-center" style={{color: "#4A148C"}}>{title}</h3>
        <p className='text-justify text-sm'>{description}</p>
      </div>

    </Link>
  );
};

export default ProjectCard;
