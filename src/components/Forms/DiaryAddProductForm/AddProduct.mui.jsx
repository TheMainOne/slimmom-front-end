import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export const AddProductInput = styled(TextField)({
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

export const AddProductButton = styled(Button)`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  text-transform: none;
  background-color: ${({ theme: { colors } }) => colors.$orange};

  box-shadow: 0 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  padding: 17px;

  &:hover {
    background-color: #e76000;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    margin: 60px 0 0;
  }

  position: absolute;
  width: 48px;
  height: 48px;
  left: 471px;
  top: 380px;

  background: #fc842d;
  /* orange */
`;

export const AddProductIcon = styled(AddCircleRoundedIcon)``;