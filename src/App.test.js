import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const btnElement = screen.getByText(/merhaba/i);
  expect(btnElement).toBeInTheDocument()
  expect(linkElement).toBeInTheDocument();
});
