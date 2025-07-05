import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  name: "boAt Airdopes",
  price: 1299,
  rating: 4.3,
  image: "https://via.placeholder.com/150",
};

test("renders product name and price", () => {
  render(<ProductCard product={mockProduct} addToCart={() => {}} />);
  expect(screen.getByText(/boAt Airdopes/i)).toBeInTheDocument();
  expect(screen.getByText(/₹1,299/)).toBeInTheDocument();
});

test("calls addToCart when button clicked", () => {
  const addToCartMock = jest.fn();
  render(<ProductCard product={mockProduct} addToCart={addToCartMock} />);
  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
});
