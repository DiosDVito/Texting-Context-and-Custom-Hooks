import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import useCounter from '../sharedComponent/useCounter';

type CounterResult = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

let result: CounterResult;
function TestComponent() {
  result = useCounter();
  return null;
}

describe('useCounter hook', () => {
  test('counter starts at 0 and increments/decrements correctly', () => {
    render(<TestComponent />);
    
    expect(result.count).toBe(0);
    
    result.increment();
    expect(result.count).toBe(1);
    
    result.decrement();
    expect(result.count).toBe(0);
  });
});