import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Get single product
export const fetchProductById = async (id: number) => {
    try {
        // const randomId = (Math.floor(Math.random() * 1454) + 1).toString;
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch(e) {
        console.error('Error get single user: ', e);
        throw e;
    }
}

// Get products
export const fetchProducts = async () => {
    try {
        // const randomId = (Math.floor(Math.random() * 1454) + 1).toString;
        const response = await api.get(`/products?limit=20`);
        return response.data;
    } catch(e) {
        console.error('Error get single user: ', e);
        throw e;
    }
}


// Post products
export type CreateProduct = {
    title: string;
    price: number;
    image: string;
}

export const createProduct = async (product: CreateProduct) => {
    try {
        const response = await api.post('/products', product);        
        return response.data;
    } catch(err) {
        console.log('Error creating product:', err);
        throw err;
    }
}