import styled from 'styled-components';
import { motion } from 'motion/react';

export const GroupWrapper = styled.div`
  padding: 0.25rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 0.25rem;
`;

export const OptionButton = styled.button<{ active?: boolean }>`
  position: relative;
  flex: 1;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.6875rem;
  font-weight: 700;
  transition: colors 0.3s transition;
  z-index: 10;
  color: ${props => props.active ? 'white' : '#6b7280'};

  &:hover {
    color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.6)'};
  }
`;

export const ActiveBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  z-index: -1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
