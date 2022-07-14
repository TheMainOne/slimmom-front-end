import { styled } from '@mui/material/styles';
import {
  Button,
  TextField,
  Radio,
  FormLabel,
  FormControlLabel,
} from '@mui/material';

const RadioInput = styled(Radio)({
  color: '#E0E0E0',
  '&.Mui-checked': {
    color: ' #fc842d',
  },
});

const RadioLabel = styled(FormLabel)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-bottom: 8.5px;
  color: #9b9faa;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding: 0px 0px 20px;
  }
`;

const ControlLabel = styled(FormControlLabel)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
`;

const ButtonRegister = styled(Button)`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  text-transform: none;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  margin: auto;
  padding: 13px 27px;
  margin-top: 40px;

  &:hover {
    background-color: #e76000;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    margin: 28px 0 0;
  }
`;

const CastomTextField = styled(TextField)({
  '& ': {
    marginBottom: '20px',
    width: '240px',
  },
  '& label': {
    color: '#9B9FAA',
    fontFamily: 'Verdana',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '1.2',
    letterSpacing: '0.04em',
  },
  '& label.Mui-focused': {
    color: '#FC842D',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid #E0E0E0',
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: '#FC842D',
  },
});

export {
  ButtonRegister,
  CastomTextField,
  RadioInput,
  RadioLabel,
  ControlLabel,
};
