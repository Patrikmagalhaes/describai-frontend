import { useState } from 'react';
import type { ImageDescription, AppState } from '../types/description';
import { getMockDescription } from '../mocks/descriptionMock';

export const useMockGenerator = () => {
  const [result, setResult] = useState<ImageDescription | null>(null);
  const [status, setStatus] = useState<AppState>('idle');

  const generate = async (tone: string) => {
    setStatus('processing');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockData = getMockDescription(tone);
    setResult(mockData);
    setStatus('success');
  };

  const reset = () => {
    setResult(null);
    setStatus('idle');
  };

  return { generate, result, status, reset };
};
