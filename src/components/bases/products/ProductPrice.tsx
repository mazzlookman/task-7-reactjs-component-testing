interface ProductPriceProps {
    price: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
    return (
        <p className="text-xl font-bold text-green-500">
            ${price.toFixed(2)}
        </p>
    );
}