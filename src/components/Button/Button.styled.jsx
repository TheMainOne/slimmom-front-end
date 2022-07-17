import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  display: block;
  min-width: 176px;
  padding: 13px 25px;
  background-color: ${({ variant, theme: { colors } }) =>
    variant === 'outlined' ? colors.$white : colors.$orange};
  box-shadow: ${({ theme: { options } }) => options.buttonShadow};
  color: ${({ variant, theme: { colors } }) =>
    variant === 'outlined' ? colors.$orange : colors.$white};
  border: 2px solid ${({ theme: { colors } }) => colors.$orange};
  outline: none;
  border-radius: 30px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  text-transform: none;
  transition-property: transform;
  transition-timing-function: ${({ theme: { options } }) => options.cubic};
  transition-duration: ${({ theme: { options } }) => options.time};

  & .Mui-focusVisible,
  &:hover {
    background-color: ${({ variant, theme: { colors } }) =>
      variant === 'outlined' ? colors.$white : colors.$darkOrange};
    color: ${({ variant, theme: { colors } }) =>
      variant === 'outlined' ? colors.$darkOrange : colors.$white};
    outline: none;
    box-shadow: ${({ theme: { options } }) => options.buttonShadow};
    border: 2px solid ${({ theme: { colors } }) => colors.$darkOrange};
    transform: scale(1.05);
  }
`;
