import React from 'react';
import { Link } from 'react-router-dom';
import {Title} from "../bases/Title.tsx";
import {Image} from "../bases/Image.tsx";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
}

const ProjectsCard: React.FC<CardProps> = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="w-80 md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <Image src={imageUrl} alt={title} />
        <div className="px-6 py-4">
            <Link to={linkTo}>
                <Title title={title} />
            </Link>
            <p className="text-neutral-dark text-base">
              {description}
            </p>
        </div>
    </div>
  );
}

export default ProjectsCard;
