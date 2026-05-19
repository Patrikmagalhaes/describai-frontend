import { ShieldCheck, Zap, Globe, Code } from 'lucide-react';
import { BenefitCard } from '../BenefitCard';
import * as S from './styles';

export const BenefitGrid = () => {
  const benefits = [
    { icon: <ShieldCheck size={16} />, label: "WCAG Ready", color: 'purple' as const, description: "Conformidade nível AAA" },
    { icon: <Zap size={16} />, label: "AI Generated", color: 'blue' as const, description: "Vision Transformers v4" },
    { icon: <Globe size={16} />, label: "SEO Friendly", color: 'pink' as const, description: "Focado em ranqueamento" },
    { icon: <Code size={16} />, label: "HTML Ready", color: 'green' as const, description: "Código pronto para colar" },
  ];

  return (
    <S.GridContainer>
      {benefits.map((benefit, index) => (
        <BenefitCard 
          key={index} 
          icon={benefit.icon} 
          label={benefit.label} 
          color={benefit.color}
          description={benefit.description}
        />
      ))}
    </S.GridContainer>
  );
};
