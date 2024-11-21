import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-80 md:max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-primary">{title}</div>
        <p className="text-neutral-dark text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
