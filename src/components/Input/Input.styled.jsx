import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CastomTextField = styled(TextField)`
  & {
    margin-bottom: 20px;
    min-width: 240px;
  }
  & label {
    color: ${({ theme: { colors } }) => colors.$grey};
    font-family: ${({ theme: { fonts } }) => fonts.verdana};
    font-weight: 700;
    font-size: 14px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
    letter-spacing: 0.04em;
  }
  & label.Mui-focused {
    color: ${({ theme: { colors } }) => colors.$orange};
  }
  & .MuiInput-underline:before {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColor};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${({ theme: { colors } }) => colors.$orange};
  }
`;

export { CastomTextField };
