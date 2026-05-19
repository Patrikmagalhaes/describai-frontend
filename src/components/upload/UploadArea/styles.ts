import styled from 'styled-components';

export const AreaWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const PreviewContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 16 / 9;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s transition;
  display: flex;
  align-items: center;
  justify-content: center;

  ${PreviewContainer}:hover & {
    opacity: 1;
  }
`;

export const DropzoneContainer = styled.div<{ $isActive?: boolean }>`
  position: relative;
  border-radius: 1rem;
  border: 2px dashed ${props => props.$isActive ? props.theme.colors.brand.purple : 'rgba(255, 255, 255, 0.1)'};
  aspect-ratio: 16 / 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.$isActive ? 'rgba(147, 51, 234, 0.05)' : 'transparent'};

  &:hover {
    border-color: ${props => props.$isActive ? props.theme.colors.brand.purple : 'rgba(255, 255, 255, 0.2)'};
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

export const IconWrapper = styled.div`
  padding: 1rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 1rem;
  transition: background-color 0.3s;

  ${DropzoneContainer}:hover & {
    background-color: rgba(147, 51, 234, 0.1);
  }
`;

export const MainText = styled.p`
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const SubText = styled.p`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.875rem;
`;

export const FormatText = styled.p`
  margin-top: 1rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.2);
`;

export const ClearButton = styled.button`
  padding: 0.75rem;
  border-radius: 9999px;
  background-color: rgba(239, 68, 68, 0.8);
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ef4444;
  }
`;
