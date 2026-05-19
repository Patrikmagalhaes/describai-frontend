import type { ReactNode } from 'react';
import * as S from './styles';

interface BenefitCardProps {
  icon: ReactNode;
  label: string;
  color?: 'purple' | 'blue' | 'pink' | 'green';
  description?: string;
  key?: number | string;
}

export const BenefitCard = ({ icon, label, color = 'purple', description = 'Smart Analysis' }: BenefitCardProps) => {
  return (
    <S.CardWrapper 
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
    >
      <S.IconBox color={color}>
        {icon}
      </S.IconBox>
      <div>
        <S.Label>{label}</S.Label>
        <S.Description>{description}</S.Description>
      </div>
    </S.CardWrapper>
  );
};
