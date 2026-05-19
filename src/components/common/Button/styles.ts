import styled from 'styled-components';
import { motion } from 'motion/react';

export const StyledButton = styled(motion.button)<{ variant: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  transition: all 0.3s;
  overflow: hidden;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.variant === 'primary' && `
    background: linear-gradient(to right, ${props.theme.colors.brand.purple}, ${props.theme.colors.brand.blue});
    color: white;
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
    
    &:hover {
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
    }
  `}

  ${props => props.variant === 'secondary' && `
    background: linear-gradient(to right, ${props.theme.colors.brand.blue}, #4338ca);
    color: white;
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
    
    &:hover {
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
    }
  `}

  ${props => props.variant === 'outline' && `
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}

  ${props => props.variant === 'ghost' && `
    background-color: transparent;
    color: rgba(255, 255, 255, 0.7);
    
    &:hover {
      color: white;
      background-color: rgba(255, 255, 255, 0.05);
    }
  `}

  &.btn-full {
    width: 100%;
    padding: 1.25rem;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
  }
`;

export const GlossEffect = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 1s;

  ${StyledButton}:hover & {
    transform: translateX(100%);
  }
`;
