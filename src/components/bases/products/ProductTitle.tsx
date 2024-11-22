import React from 'react';

interface ProductTitleProps {
  title: string;
}

export const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
  return <h3 className="text-lg font-semibold text-gray-800">{title}</h3>;
};
