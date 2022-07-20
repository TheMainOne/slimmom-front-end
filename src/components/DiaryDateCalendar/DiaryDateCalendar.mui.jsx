import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
const DateInputStyled = styled(TextField)`
  & .MuiInput-input {
    max-width: 116px;
    height: 20px;
    font-family: ${({ theme: { fonts } }) => fonts.verdanaBold};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
    color: ${({ theme: { colors } }) => colors.$black};
    border: none;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 34px;
      height: 38px;
      max-width: 220px;
    }
  }

  &
    .css-1ptx2yq-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: none;
  }

  & .MuiInputBase-root:before {
    border-bottom: none;
  }

  & .MuiInput-underline:before {
    border-bottom: none;
  }
  &:hover .MuiInput-underline:before {
    border-bottom: none;
  }
  &:hover .MuiInput-underline:after {
    border-bottom: none;
  }
  & .MuiInput-underline:after {
    border-bottom: none;
  }
`;
export { DateInputStyled };
