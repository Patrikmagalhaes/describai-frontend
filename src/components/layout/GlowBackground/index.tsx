import * as S from './styles';

export const GlowBackground = () => {
  return (
    <S.GlowWrapper>
      <S.GlowBall $position="top" color="rgba(147, 51, 234, 0.2)" />
      <S.GlowBall $position="bottom" color="rgba(37, 99, 235, 0.2)" />
    </S.GlowWrapper>
  );
};
