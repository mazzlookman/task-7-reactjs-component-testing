import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ProductPage } from '../../pages/ProductPage.tsx';
import { vi } from 'vitest';
import { fetchProducts, createProduct } from '../../api/api-service';

// Mock API dan localStorage
vi.mock('../../api/api-service', () => ({
    fetchProducts: vi.fn(),
    createProduct: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
    Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

describe('ProductPage', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    it('shows loading state initially', () => {
        render(<ProductPage />);

        expect(screen.getByText(/Loading products.../i)).toBeInTheDocument();
    });

    it('renders products correctly after loading', async () => {
        const mockProducts = [
            { id: 1, image: 'http://example.com/image1.jpg', title: 'Product 1', price: 100 },
            { id: 2, image: 'http://example.com/image2.jpg', title: 'Product 2', price: 200 },
        ];
        (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);

        render(<ProductPage />);

        // Tunggu hingga produk selesai dimuat
        await waitFor(() => {
            expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
            expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
        });
    });

    it('shows error message if fetching products fails', async () => {
        (fetchProducts as jest.Mock).mockRejectedValue(new Error('Network Error'));

        render(<ProductPage />);

        // Tunggu hingga error ditampilkan
        await waitFor(() => {
            expect(screen.getByText(/Failed to load Products: Network Error/i)).toBeInTheDocument();
        });
    });

    it('adds a new product correctly', async () => {
        const mockProducts = [
            { id: 1, image: 'http://example.com/image1.jpg', title: 'Product 1', price: 100 },
        ];
        const newProduct = { id: 2, image: 'http://example.com/image2.jpg', title: 'Product 2', price: 200 };

        (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);
        (createProduct as jest.Mock).mockResolvedValue(newProduct);

        render(<ProductPage />);

        // Tunggu hingga produk awal selesai dimuat
        await waitFor(() => {
            expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
        });

        // Simulasikan pengisian form dan submit
        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: newProduct.title } });
        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: newProduct.price } });
        fireEvent.change(screen.getByLabelText(/Image/i), { target: { value: newProduct.image } });
        fireEvent.click(screen.getByText(/Add Product/i));

        // Tunggu hingga produk baru ditambahkan
        await waitFor(() => {
            expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
        });

        // Pastikan produk disimpan di localStorage
        const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
        expect(savedProducts).toHaveLength(2);
    });
});
