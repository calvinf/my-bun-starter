import { expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);

  expect(screen.getByText('My Bun Starter')).toBeInTheDocument();
});
