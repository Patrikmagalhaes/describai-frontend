import { useState, useCallback } from 'react';
import type { AppState } from '../types/description';

export const useUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [uploadStatus, setUploadStatus] =
    useState<AppState>('idle');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];

    if (selectedFile) {
      setUploadStatus('uploading');

      setFile(selectedFile);

      const reader = new FileReader();

      reader.onload = () => {
        setPreview(reader.result as string);
        setUploadStatus('idle');
      };

      reader.readAsDataURL(selectedFile);
    }
  }, []);

  const clear = () => {
    setPreview(null);
    setFile(null);
    setUploadStatus('idle');
  };

  return {
    preview,
    file,
    uploadStatus,
    onDrop,
    clear,
  };
};