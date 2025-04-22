import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import useCounter from '../sharedComponent/useCounter';

type CounterResult = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

function setup({ initialCount = 0, step = 1 } = {}) {
  const result = { current: {} as CounterResult };
  
  function TestComponent() {
    result.current = useCounter({ initialCount, step });
    return null;
  }
  
  render(<TestComponent />);
  return result;
}

describe('useCounter hook', () => {
  test('counter starts at 0 and increments/decrements correctly', () => {
    const result = setup();
    
    // Initial state
    expect(result.current.count).toBe(0);
    
    // Test increment
    result.current.increment();
    expect(result.current.count).toBe(1);
    
    // Test decrement
    result.current.decrement();
    expect(result.current.count).toBe(0);
  });

  test('should allow customization of the initial count', () => {
    const result = setup({ initialCount: 5 });
    
    // Initial state
    expect(result.current.count).toBe(5);
    
    // Test increment
    result.current.increment();
    expect(result.current.count).toBe(6);
    
    // Test decrement
    result.current.decrement();
    expect(result.current.count).toBe(5);
  });

  test('should allow customization of the step', () => {
    const result = setup({ step: 2 });
    
    // Initial state
    expect(result.current.count).toBe(0);
    
    // Test increment with step 2
    result.current.increment();
    expect(result.current.count).toBe(2);
    
    // Test decrement with step 2
    result.current.decrement();
    expect(result.current.count).toBe(0);
  });
}); 