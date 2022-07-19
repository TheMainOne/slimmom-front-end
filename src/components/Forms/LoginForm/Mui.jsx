import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ButtonLogin = styled(Button)`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  text-transform: none;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  margin: auto;
  padding: 13px 57px;
  width: 181px;
  margin-top: 60px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #e76000;
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    margin: 60px 0 0;
  }
`;
const ButtonRegistration = styled(ButtonLogin)`
  display: flex;
  color: #fc842d;
  background-color: #ffffff;
  border: 2px solid #fc842d;
  padding: 11px 69px;
  box-shadow: none;
  width: 182px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgb(252 132 45 / 50%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250mscubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #ffffff;
    border: 2px solid #e76000;
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 215px;
  }
`;
const CastomTextField = styled(TextField)({
  '& ': {
    marginBottom: '20px',
    minWidth: '240px',
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

export { ButtonLogin, CastomTextField, ButtonRegistration };
