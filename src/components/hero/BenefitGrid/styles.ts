import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  gap: 1rem;
  margin-top: 3rem;
`;
