import { Copy, Check } from 'lucide-react';
import { useClipboard } from '../../../hooks/useClipboard';
import * as S from './styles';

interface ResultSectionProps {
  title: string;
  content: string;
  id: string;
  isCode?: boolean;
}

export const ResultSection = ({ title, content, id, isCode }: ResultSectionProps) => {
  const { copy, copied } = useClipboard();

  return (
    <S.SectionWrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.CopyButton onClick={() => copy(content, id)}>
          {copied === id ? (
            <>
              <Check size={12} className="text-green-500" />
              <S.SuccessText>Copiado</S.SuccessText>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copiar</span>
            </>
          )}
        </S.CopyButton>
      </S.Header>
      
      <S.ContentBox isCode={isCode}>
        {content}
      </S.ContentBox>
    </S.SectionWrapper>
  );
};
