import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  text-transform: none;
  display: block;
  color: ${({ variant, theme: { colors } }) =>
    variant === 'outlined' ? colors.$orange : colors.$white};
  background-color: ${({ variant, theme: { colors } }) =>
    variant === 'outlined' ? colors.$white : colors.$orange};
  box-shadow: ${({ theme: { options } }) => options.buttonShadow};
  border: 1px solid ${({ theme: { colors } }) => colors.$orange};
  border-radius: 30px;
  /* margin: 0 auto; */
  min-width: 176px;
  padding: 13px 25px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};

  & .Mui-focusVisible,
  &:hover {
    background-color: ${({ variant, theme: { colors } }) =>
      variant === 'outlined' ? colors.$white : colors.$orange};
    border: 1px solid ${({ theme: { colors } }) => colors.$orange};
    outline: 1px solid ${({ theme: { colors } }) => colors.$orange};
  }
  /* &:hover {
    background-color: #e76000;
    transform: scale(1.1);
  } */
  /* @media screen and (min-width: 768px) {
    margin: 60px 0 0 0;
  } */

  /* @media screen and (min-width: 1200px) {
    margin: ${({ centered }) => (centered ? '0 auto' : '60px 0 0 339px')};
  } */
`;
