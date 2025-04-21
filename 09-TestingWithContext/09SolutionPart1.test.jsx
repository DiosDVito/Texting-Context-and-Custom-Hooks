import React from 'react';
import { render, screen } from '@testing-library/react';
import EasyButton from '../sharedComponent/EasyButton';
import { ThemeProvider } from '../sharedComponent/theme';

// Custom wrapper function that wraps components in ThemeProvider
function Wrapper({ children, initialTheme = 'light' }) {
  return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}

describe('EasyButton', () => {
  test('renders with light theme', () => {
    render(<EasyButton>Click me</EasyButton>, { wrapper: Wrapper });
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle({
      backgroundColor: 'white',
      color: 'black'
    });
  });

  test('renders with dark theme', () => {
    render(<EasyButton>Click me</EasyButton>, { 
      wrapper: (props) => <Wrapper {...props} initialTheme="dark" />
    });
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'white'
    });
  });
}); 