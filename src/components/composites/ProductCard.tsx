import React from "react";
import { ProductImage } from "../bases/products/ProductImage";
import { ProductTitle } from "../bases/products/ProductTitle";
import { ProductPrice } from "../bases/products/ProductPrice";
import { Link } from "react-router-dom";

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
            <ProductImage src={image} alt={title} />
            <div className="p-4">                
                <Link to={`/products/${id}`}>
                    <ProductTitle title={title} />
                    <ProductPrice price={price} />
                </Link>
            </div>
        </div>
    );
}