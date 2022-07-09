import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ButtonRegister = styled(Button)`
font-family: 'Verdana';
font-weight: 700;
font-size: 14px;
text-transform: none;
background-color: #FC842D;
box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
border-radius: 30px;
margin: auto;
padding: 13px 57px;
margin-top:60px;
&:hover {
  background-color: #e76000;
  transform: scale(1.1);
}
`
const LinkLogin = styled(ButtonRegister)`
color: #FC842D;
background-color: #ffffff;
border: 2px solid #FC842D;
padding: 13px 69px;
box-shadow: none;
margin-top:20px;
&:hover {
  background-color: #ffffff;
  border: 3px solid #e76000;
}

`
const CastomTextField = styled(TextField)({
  '& ': {
    marginBottom: '20px'

  },
  '& label': {
    color: '#9B9FAA',
    fontFamily: 'Verdana',
fontWeight: 700,
fontSize: '14px',
lineHeight:'1.2',
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

export {  ButtonRegister, CastomTextField , LinkLogin};