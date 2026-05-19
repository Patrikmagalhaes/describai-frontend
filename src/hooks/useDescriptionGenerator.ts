import { useState } from 'react';

import type {
  ImageDescription,
  AppState,
  Tone,
  Language,
  Size
} from '../types/description';

import { generateDescription }
  from '../services/description.service';

export const useDescriptionGenerator = () => {
  const [result, setResult] =
    useState<ImageDescription | null>(null);

  const [status, setStatus] =
    useState<AppState>('idle');

  const [error, setError] =
    useState<string | null>(null);

  const generate = async (
    file: File,
    tone: Tone,
    language: Language,
    size: Size
  ) => {
    try {
      setStatus('processing');
      setError(null);

      const data = await generateDescription(
        file,
        tone,
        language,
        size
      );

      setResult(data);

      setStatus('success');
    } catch (err) {
      setStatus('error');

      setError(
        err instanceof Error
          ? err.message
          : 'Erro inesperado'
      );
    }
  };

  const reset = () => {
    setResult(null);
    setStatus('idle');
    setError(null);
  };

  return {
    generate,
    result,
    status,
    error,
    reset,
  };
};