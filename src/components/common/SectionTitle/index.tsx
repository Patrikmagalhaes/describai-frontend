import * as S from './styles';

interface SectionTitleProps {
  label: string;
  className?: string;
}

export const SectionTitle = ({ label, className = '' }: SectionTitleProps) => {
  return (
    <S.StyledTitle className={className}>
      {label}
    </S.StyledTitle>
  );
};
