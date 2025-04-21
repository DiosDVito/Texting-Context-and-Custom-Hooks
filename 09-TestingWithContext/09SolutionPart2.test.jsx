import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';

// Custom render method that wraps components in ThemeProvider
function renderWithProviders(ui, { theme = 'light', ...options } = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

describe('EasyButton', () => {
  test('renders with light theme', () => {
    renderWithProviders(<EasyButton>Click me</EasyButton>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle({
      backgroundColor: 'white',
      color: 'black'
    });
  });

  test('renders with dark theme', () => {
    renderWithProviders(<EasyButton>Click me</EasyButton>, { theme: 'dark' });
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'white'
    });
  });
}); 