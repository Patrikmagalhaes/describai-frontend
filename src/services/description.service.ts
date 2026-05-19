import type {
  ImageDescription,
  Tone,
  Language,
  Size
} from '../types/description';

export const generateDescription = async (
  file: File,
  tone: Tone,
  language: Language,
  size: Size
): Promise<ImageDescription> => {
  const formData = new FormData();

  formData.append('image', file);
  formData.append('tone', tone);
  formData.append('language', language);
  formData.append('size', size);

  const response = await fetch(
    'http://localhost:3333/generations',
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    console.error('STATUS:', response.status);

    const errorText = await response.text();

    console.error(errorText);

    throw new Error('Erro ao gerar descrição');
  }

  const data: ImageDescription =
    await response.json();

  console.log('SUCCESS:', data);

  return data;
};