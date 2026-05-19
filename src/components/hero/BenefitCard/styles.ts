import styled from 'styled-components';
import { motion } from 'motion/react';

const colorMap = {
  purple: '#a855f7',
  blue: '#3b82f6',
  pink: '#ec4899',
  green: '#22c55e'
};

const bgMap = {
  purple: 'rgba(168, 85, 247, 0.2)',
  blue: 'rgba(59, 130, 246, 0.2)',
  pink: 'rgba(236, 72, 153, 0.2)',
  green: 'rgba(34, 197, 94, 0.2)'
};

const hoverBgMap = {
  purple: 'rgba(168, 85, 247, 0.4)',
  blue: 'rgba(59, 130, 246, 0.4)',
  pink: 'rgba(236, 72, 153, 0.4)',
  green: 'rgba(34, 197, 94, 0.4)'
};

export const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 0.3s;
`;

export const IconBox = styled.div<{ color: 'purple' | 'blue' | 'pink' | 'green' }>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  color: ${props => colorMap[props.color]};
  background-color: ${props => bgMap[props.color]};

  ${CardWrapper}:hover & {
    background-color: ${props => hoverBgMap[props.color]};
  }
`;

export const Label = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.025em;
`;

export const Description = styled.p`
  font-size: 0.625rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin-top: 0.25rem;
`;
