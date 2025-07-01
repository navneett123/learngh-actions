import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub Actions landing page', () => {
  render(<App />);
  const heading = screen.getByText(/GitHub Actions Guide/i);
  expect(heading).toBeInTheDocument();
});
