import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-family: ${props => props.theme.fonts.sans};
`;
