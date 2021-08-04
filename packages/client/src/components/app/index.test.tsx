import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/template in GitHub/i);

  expect(linkElement).toBeInTheDocument();
});

test('renders my section', () => {
  render(<App />);
  const section = screen.getByTestId(/my-section/i);

  expect(section).toBeInTheDocument();
});
