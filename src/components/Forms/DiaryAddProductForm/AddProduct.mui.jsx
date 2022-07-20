import styled from 'styled-components';
import Button from '@mui/material/Button';
import { GoPlus } from 'react-icons/go';
import { CastomTextField as CustomTextField } from 'components/Input/Input.styled';

export const Input = styled(CustomTextField)``;

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

export const AddProductButtonWrapper = styled.div`
  margin: 60px auto;
`;
