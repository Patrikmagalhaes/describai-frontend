import type{ ReactNode } from 'react';
import * as S from './styles';

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card = ({ children, className = '', glow }: CardProps) => {
  return (
    <S.CardWrapper className={className} glow={glow}>
      {children}
    </S.CardWrapper>
  );
};
