import { render, screen } from '@testing-library/react';
import App from './App';

test('renders whatsup text', () => {
  render(<App />);
  const h1Element = screen.getByText(/Hello! What's Up?/i);
  expect(h1Element).toBeInTheDocument();
});
