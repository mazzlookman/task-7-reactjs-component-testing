import React from 'react';

interface ProductTitleProps {
    title: string;
}

export const Title: React.FC<ProductTitleProps> = ({ title }) => {
    return <h3 className="font-bold text-xl mb-2 text-primary">{title}</h3>;
};
