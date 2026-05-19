import styled from 'styled-components';

export const SectionWrapper = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h4`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.3);
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s transition;

  &:hover {
    color: white;
  }
`;

export const ContentBox = styled.div<{ isCode?: boolean }>`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(255, 255, 255, 0.02);
  font-size: 0.875rem;
  line-height: 1.625;
  color: rgba(255, 255, 255, 0.8);

  ${props => props.isCode && `
    font-family: ${props.theme.fonts.mono};
    font-size: 0.75rem;
    color: ${props.theme.colors.brand.blue};
  `}
`;

export const SuccessText = styled.span`
  color: #22c55e;
`;
