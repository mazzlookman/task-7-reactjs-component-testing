import React, { useEffect, useState } from "react";
import { createProduct, CreateProduct, fetchProducts } from "../api/api-service.ts";
import { Link } from "react-router-dom";
import { Product, ProductListSection } from "../components/sections/ProductListSection";
import { ProductFormSection } from "../components/sections/ProductFormSection";

export const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
    
                // Cek apakah localStorage ada data products
                const savedProducts = localStorage.getItem('products');
                if (savedProducts) {
                    setProducts(JSON.parse(savedProducts));
                } else {
                    const dataProducts = await fetchProducts();
                    setProducts(dataProducts);   
                    localStorage.setItem('products', JSON.stringify(dataProducts));
                }                
            } catch(err) {
                setError(`Failed to load Products: ${(err as Error).message}`);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);


    const handleAddProduct = async (product: CreateProduct) => {
        try {
            const newProduct = await createProduct(product);            
            setProducts((prevProducts) => {
                let updatedProducts = [newProduct, ...prevProducts];

                if(updatedProducts.length > 128) {
                    updatedProducts = updatedProducts.slice(0, 128);
                }

                localStorage.setItem('products', JSON.stringify(updatedProducts));

                return updatedProducts;
            });
            alert('Product berhasil ditambahkan');
        } catch(error) {
            console.error('Error adding product:', error)
        }
    }

    return (
        <div className="p-8">
            <span className='self-start mb-4 pl-2 text-primary-light hover:text-primary-dark'><Link to='/'>Go to Homepage</Link></span>
            <ProductFormSection onSubmit={handleAddProduct}/>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            { loading ? (
                <p>Loading products...</p>
            ) : error ? (
                <p>{ error }</p>
            ) : (
                <ProductListSection products={ products }/>
            )}
        </div>
    )
}