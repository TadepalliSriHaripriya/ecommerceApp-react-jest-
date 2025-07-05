import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../components/Cart';

describe("🛒 Cart Component", () => {
  const mockRemoveFromCart = jest.fn();

  const mockItems = [
    { id: 1, name: "Airdopes", price: 1000 },
    { id: 1, name: "Airdopes", price: 1000 },
    { id: 2, name: "Shoes", price: 2000 },
  ];

  test("renders empty cart message", () => {
    render(<Cart cartItems={[]} removeFromCart={mockRemoveFromCart} />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test("displays grouped items with quantity and totals", () => {
    render(<Cart cartItems={mockItems} removeFromCart={mockRemoveFromCart} />);

    const airdopesItem = screen.getByText((content, element) =>
      element?.textContent?.includes("Airdopes") &&
      element.textContent.includes("2") &&
      element.textContent.includes("₹2,000")
    );
    expect(airdopesItem).toBeInTheDocument();

    const shoesItem = screen.getByText((content, element) =>
      element?.textContent?.includes("Shoes") &&
      element.textContent.includes("1") &&
      element.textContent.includes("₹2,000")
    );
    expect(shoesItem).toBeInTheDocument();

    expect(screen.getByText(/total/i)).toHaveTextContent("₹4,000");
  });

  test("calls removeFromCart when remove button clicked", () => {
    render(<Cart cartItems={mockItems} removeFromCart={mockRemoveFromCart} />);
    
    const removeButtons = screen.getAllByText(/remove/i);
    expect(removeButtons.length).toBe(2); // 2 buttons: Airdopes and Shoes

    // Click remove for Airdopes
    fireEvent.click(removeButtons[0]);

    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1); // Airdopes ID
  });
});
