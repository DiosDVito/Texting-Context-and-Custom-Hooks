import { renderHook, act } from '@testing-library/react';
import useCounter from '../sharedComponent/useCounter';

describe('useCounter hook', () => {
  test('counter starts at 0 and increments/decrements correctly', () => {
    const { result } = renderHook(() => useCounter());
    
    // Initial state
    expect(result.current.count).toBe(0);
    
    // Test increment
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    
    // Test decrement
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  test('should allow customization of the initial count', () => {
    const { result } = renderHook(() => useCounter({ initialCount: 5 }));
    
    // Initial state
    expect(result.current.count).toBe(5);
    
    // Test increment
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
    
    // Test decrement
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(5);
  });

  test('should allow customization of the step', () => {
    const { result } = renderHook(() => useCounter({ step: 2 }));
    
    // Initial state
    expect(result.current.count).toBe(0);
    
    // Test increment with step 2
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
    
    // Test decrement with step 2
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
}); 