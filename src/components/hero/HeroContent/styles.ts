import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  
  @media (min-width: 1024px) {
    max-width: 36rem;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 700;
  color: #a855f7;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.display};

  @media (min-width: 480px) {
    font-size: 2.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
    margin-bottom: 2rem;
  }

  span {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #a855f7, #60a5fa);
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  line-height: 1.6;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.625;
    margin-bottom: 2.5rem;
    max-width: 28rem;
  }
`;
