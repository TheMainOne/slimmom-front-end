import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  text-transform: none;
  display: block;
  background-color: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  margin: 0 auto;
  padding: 13px 25px;
  margin-top: 60px;
  &:hover {
    background-color: #e76000;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin: 60px 0 0 0;
  }

  @media screen and (min-width: 1200px) {
    margin: ${({ centered }) => (centered ? '0 auto' : '60px 0 0 339px')};
  }
`;
