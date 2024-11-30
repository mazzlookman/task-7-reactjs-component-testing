import React from "react";
import { Link } from "react-router-dom";
import {Title} from "../bases/Title.tsx";
import {Image} from "../bases/Image.tsx";
import {Price} from "../bases/Price.tsx";

interface ProductCardProps {
    id: number
    image: string;
    title: string;
    description?: string;
    price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, id }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-2">
            <Image src={image} alt={title} />
            <div className="p-4">                
                <Link to={`/products/${id}`}>
                    <Title title={title} />
                    <Price price={price} />
                </Link>
            </div>
        </div>
    );
}