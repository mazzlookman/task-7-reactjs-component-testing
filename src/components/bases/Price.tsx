import React from "react";

interface ProductPriceProps {
    price: number;
}

export const Price: React.FC<ProductPriceProps> = ({ price }) => {
    return (
        <p className="text-xl font-bold text-green-500">
            ${price.toFixed(2)}
        </p>
    );
}