import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test("calls onSearch on input change", () => {
  const onSearchMock = jest.fn();
  render(<SearchBar searchTerm="" onSearch={onSearchMock} />);

  const input = screen.getByPlaceholderText(/search for products/i);
  fireEvent.change(input, { target: { value: "boat" } });

  expect(onSearchMock).toHaveBeenCalledWith("boat");
});
