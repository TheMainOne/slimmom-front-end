import { Btn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Btn color="primary" variant="contained" type="submit" onClick={onClick}>
      Start losing weight
    </Btn>
  );
};
