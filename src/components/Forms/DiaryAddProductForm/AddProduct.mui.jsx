import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { GoPlus } from 'react-icons/go';

export const AddProductInput = styled(TextField)({
  '& ': {
    // marginBottom: '20px',
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

export const AddProductButton = styled(Button)`
  min-width: 48px;
  height: 48px;
  padding: 17px;
  font-family: 'Verdana';

  font-size: 14px;
  font-weight: 700;
  text-transform: none;

  background: #fc842d;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(252, 132, 45, 0.5);

  &:hover {
    background: #e76000;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    /* margin: 60px 0 0; */
  }
`;

export const AddProductIcon = styled(GoPlus)``;
