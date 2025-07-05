import { render, screen } from '@testing-library/react';
import App from './Home';

test("renders Flipkart Clone header", () => {
  render(<App />);
  expect(screen.getByText(/flipkart clone/i)).toBeInTheDocument();
});
