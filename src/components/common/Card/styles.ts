import styled from 'styled-components';

export const CardWrapper = styled.div<{ glow?: boolean }>`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  ${props => props.glow && `
    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: linear-gradient(to right, ${props.theme.colors.brand.purple}, ${props.theme.colors.brand.blue});
      border-radius: 1.5rem;
      opacity: 0.25;
      filter: blur(20px);
      z-index: -1;
      animation: glow 4s ease-in-out infinite;
    }
  `}
`;
