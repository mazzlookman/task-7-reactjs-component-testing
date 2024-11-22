import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

const ProjectsCard: React.FC<CardProps> = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="w-80 md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-primary">
          <Link to={linkTo}>{title}</Link>
        </div>
        <p className="text-neutral-dark text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
