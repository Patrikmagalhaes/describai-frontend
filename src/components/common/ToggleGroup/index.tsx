import * as S from './styles';

interface ToggleGroupProps<T extends string> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export const ToggleGroup = <T extends string>({ options, value, onChange, className = '' }: ToggleGroupProps<T>) => {
  return (
    <S.GroupWrapper className={className}>
      {options.map((option) => {
        const isActive = value === option;
        return (
          <S.OptionButton
            key={option}
            onClick={() => onChange(option)}
            active={isActive}
          >
            {isActive && (
              <S.ActiveBackground
                layoutId="active-bg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            {option}
          </S.OptionButton>
        );
      })}
    </S.GroupWrapper>
  );
};
