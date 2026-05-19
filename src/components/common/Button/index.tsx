import type{ ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import * as S from './styles';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  isLoading, 
  disabled, 
  className = '',
  icon
}: ButtonProps) => {
  return (
    <S.StyledButton
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      variant={variant}
      className={className}
    >
      <S.GlossEffect />
      
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </S.StyledButton>
  );
};
