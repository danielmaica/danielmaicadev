// components/ProjectCard.tsx
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, link }) => {
  return (
    <Link href={link}>
        <div className="bg-purple-500 h-full w-full p-4 rounded-md shadow-md">
          <img src={thumbnail} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-white text-lg font-bold text-center">{title}</h3>
        </div>
    </Link>
  );
};

export default ProjectCard;
