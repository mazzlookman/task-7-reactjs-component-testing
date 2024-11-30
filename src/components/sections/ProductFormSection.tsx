import React, { useState } from "react";
import { CreateProduct } from "../../api/api-service";
import { InputWithLabel } from "../bases/InputWithLabel.tsx";
import Button from "../bases/Button.tsx";

interface ProductFormProps {
    onSubmit: (product: CreateProduct) => void;
}

export const ProductFormSection: React.FC<ProductFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        onSubmit({ title, price, image });
        setTitle('');
        setPrice(0);
        setImage('');
    }

    return (
        <div className="bg-white shadow-md rounded-lg mb-6 p-6">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>            
            <InputWithLabel id={"title"} label='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <InputWithLabel id={"price"} label="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" />
            <InputWithLabel id={"image"} label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button onClick={handleSubmit} label="Add Product" className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}/>
        </div>
    )
}