import styled from 'styled-components';
import { motion } from 'motion/react';
import { media } from '../../styles/breakpoints';

export const PageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.sans};
  overflow-x: hidden;
  color: ${props => props.theme.colors.text.primary};
  background-color: ${props => props.theme.colors.bg.dark};
`;
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`;
export const Nav = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;

  @media ${media.md} {
    padding: 2rem 3rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.brand.purple}, ${props => props.theme.colors.brand.blue});
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(147, 51, 234, 0.2);
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  text-transform: uppercase;

  span {
    color: ${props => props.theme.colors.text.accent};
  }
`;

export const NavLinks = styled.div`
  display: none;
  gap: 2rem;
  font-size: 0.6875rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.2em;

  @media ${media.md} {
    display: flex;
  }
`;

export const NavLink = styled.a<{ active?: boolean }>`
  transition: color 0.3s transition;
  ${props => props.active && `
    color: white;
    border-bottom: 2px solid ${props.theme.colors.brand.purple};
    padding-bottom: 0.25rem;
  `}

  &:hover {
    color: white;
  }
`;

export const MainContent = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  padding: 1.5rem 1.25rem;
  flex: 1;
  width: 100%;

  @media ${media.lg} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 4rem;
    padding: 2.5rem 3rem;
  }
`;

export const HeroColumn = styled.div`
  @media ${media.lg} {
    grid-column: span 5 / span 5;
  }
`;

export const AppColumn = styled(motion.div)`
  position: relative;
  @media ${media.lg} {
    grid-column: span 7 / span 7;
  }
`;

export const AppCardDecoration = styled.div`
  position: absolute;
  top: -2.5rem;
  right: -2.5rem;
  width: 10rem;
  height: 10rem;
  background-color: rgba(147, 51, 234, 0.1);
  filter: blur(48px);
  border-radius: 9999px;
  pointer-events: none;
`;

export const ControlGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 0.625rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #d1d5db;
  outline: none;
  appearance: none;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:focus {
    border-color: rgba(147, 51, 234, 0.5);
  }
`;

export const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
`;

export const SizeButton = styled.button<{ active?: boolean }>`
  padding: 0.625rem 0;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all 0.3s;
  
  ${props => props.active ? `
    background-color: rgba(147, 51, 234, 0.2);
    border: 1px solid rgba(147, 51, 234, 0.5);
    color: #a855f7;
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
  ` : `
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #9ca3af;
    
    &:hover {
      color: white;
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}
`;

export const ResultsWrapper = styled(motion.div)`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 2.5rem;
`;

export const EmptyState = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.3;
`;

export const SkeletonIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
`;

export const SkeletonLines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SkeletonLine = styled.div<{ width: string }>`
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  width: ${props => props.width};
`;

export const FooterSteps = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4b5563;

  @media ${media.md} {
    padding: 0 3rem 3rem;
    letter-spacing: 0.2em;
  }
`;

export const StepItem = styled.span<{ active?: boolean }>`
  ${props => props.active && `color: #a855f7;`}
`;

export const StepDivider = styled.div`
  width: 2rem;
  height: 1px;
  background-color: #1f2937;
`;
