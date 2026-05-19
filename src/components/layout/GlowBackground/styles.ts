import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
`;

export const GlowWrapper = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -20;
  overflow: hidden;
`;

export const GlowBall = styled.div<{ $position: 'top' | 'bottom', color: string }>`
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: ${props => props.color};
  border-radius: 9999px;
  filter: blur(120px);
  animation: ${pulse} 10s ease-in-out infinite;

  ${props => props.$position === 'top' && `
    top: -100px;
    left: -100px;
  `}

  ${props => props.$position === 'bottom' && `
    bottom: -100px;
    right: -100px;
    animation-delay: 5s;
  `}
`;
