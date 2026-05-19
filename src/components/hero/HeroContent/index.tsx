import { motion } from 'motion/react';
import { BenefitGrid } from '../BenefitGrid';
import * as S from './styles';

export const HeroContent = () => {
  return (
    <S.ContentWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <S.Badge>
          Next-Gen Accessibility Tool
        </S.Badge>
        
        <S.Title>
          Transforme imagens em <span>descrições inteligentes</span> com IA
        </S.Title>
        
        <S.Description>
          Gere alt texts acessíveis, descrições SEO-friendly e tags HTML prontas para usar em segundos.
        </S.Description>

        <BenefitGrid />
      </motion.div>
    </S.ContentWrapper>
  );
};
