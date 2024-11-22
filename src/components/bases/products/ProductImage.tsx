import React from "react";

interface ProductImageProps {
    src: string;
    alt: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt }) => {
    return (
        <img className="w-full h-48 object-cover rounded-t-lg"
            src={src}
            alt={alt}
        />
    );
}