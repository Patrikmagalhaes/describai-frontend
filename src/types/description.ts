export type Tone =
  | 'natural'
  | 'formal'
  | 'seo'
  | 'detailed';

export type Size =
  | 'short'
  | 'medium'
  | 'long';

export type Language =
  | 'pt'
  | 'en'
  | 'es';

export interface ImageDescription {
  id: string;

  imageUrl: string;

  altText: string;

  caption: string;

  seoDescription: string;

  html: string;

  keywords: string[];

  metadata?: {
    language: Language;
    tone: Tone;
    size: Size;
    generatedAt: string;
  };
}

export type AppState =
  | 'idle'
  | 'dragging'
  | 'uploading'
  | 'processing'
  | 'success'
  | 'error';