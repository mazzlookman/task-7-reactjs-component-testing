import { render, screen } from '@testing-library/react';
import { ProductListSection } from '../../../components/sections/ProductListSection';
import {vi} from "vitest";

// Mock ProductCard
vi.mock('../../../components/composites/ProductCard', () => {
    return {
        ProductCard: ({ image, title, price }: any) => (
            <div data-testid="product-card">
                <img src={image} alt={`${title} image`} />
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        ),
    };
});

describe('ProductListSection', () => {
    const mockProducts = [
        {
            id: 1,
            image: 'http://example.com/image1.jpg',
            title: 'Product 1',
            price: 100,
        },
        {
            id: 2,
            image: 'http://example.com/image2.jpg',
            title: 'Product 2',
            price: 200,
        },
    ];

    it('renders all products correctly', () => {
        render(<ProductListSection products={mockProducts} />);

        // Memastikan jumlah ProductCard sesuai dengan jumlah produk
        const productCards = screen.getAllByTestId('product-card');
        expect(productCards.length).toBe(mockProducts.length);
    });

    it('renders product details correctly', () => {
        render(<ProductListSection products={mockProducts} />);

        mockProducts.forEach((product) => {
            // Memastikan title produk dirender
            expect(screen.getByText(product.title)).toBeInTheDocument();

            // Memastikan price produk dirender
            expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();

            // Memastikan image produk dirender
            expect(screen.getByAltText(`${product.title} image`)).toHaveAttribute('src', product.image);
        });
    });

    it('renders no products when the product list is empty', () => {
        render(<ProductListSection products={[]} />);

        // Memastikan tidak ada ProductCard yang dirender
        const productCards = screen.queryAllByTestId('product-card');
        expect(productCards.length).toBe(0);
    });
});
