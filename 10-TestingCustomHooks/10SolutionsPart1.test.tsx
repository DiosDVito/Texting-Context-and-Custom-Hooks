import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import useCounter from '../sharedComponent/useCounter';

function UseCounterHook() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

describe('useCounter hook', () => {
  test('counter starts at 0 and increments/decrements correctly', async () => {
    const user = userEvent.setup();
    render(<UseCounterHook />);
    
    const countDisplay = screen.getByRole('heading', { name: /count: 0/i });
    expect(countDisplay).toBeInTheDocument();
    
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    
    await user.click(incrementButton);
    expect(screen.getByRole('heading', { name: /count: 1/i })).toBeInTheDocument();
    
    await user.click(decrementButton);
    expect(screen.getByRole('heading', { name: /count: 0/i })).toBeInTheDocument();
  });
});
