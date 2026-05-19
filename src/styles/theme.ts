export const theme = {
  colors: {
    brand: {
      purple: '#9333ea',
      blue: '#2563eb',
      glow: 'rgba(124, 58, 237, 0.3)',
    },
    bg: {
      dark: '#030308',
      surface: 'rgba(255, 255, 255, 0.03)',
      black: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      muted: 'rgba(255, 255, 255, 0.4)',
      accent: '#a855f7',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.1)',
      active: 'rgba(147, 51, 234, 0.5)',
    }
  },
  fonts: {
    sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
    display: "'Outfit', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  animations: {
    glow: 'glow 4s ease-in-out infinite',
  }
};

export type Theme = typeof theme;
