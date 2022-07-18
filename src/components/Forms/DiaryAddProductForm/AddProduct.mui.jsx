import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { GoPlus } from 'react-icons/go';

export const AddProductInput = styled(TextField)`
  & {
    // marginBottom: '20px',
    min-width: 240px;
  }

  & label {
    color: #9b9faa;
    font-family: ${({ theme: { fonts } }) => fonts.verdanaBold};
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
  }

  & label.Mui-focused {
    color: #fc842d;
  }

  & .MuiInput-underline:before {
    border-bottom: 1px solid #e0e0e0;
  }

  & .MuiInput-underline:after {
    border-bottom-color: #fc842d;
  }
`;

export const AddProductButton = styled(Button)`
  && {
    align-self: center;

    min-width: 48px;
    height: 48px;
    padding: 17px;

    font-family: ${({ theme: { fonts } }) => fonts.verdanaBold};
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
  }
`;

export const AddProductIcon = styled(GoPlus)``;
