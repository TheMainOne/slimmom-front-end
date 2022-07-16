import { Btn } from './Button.styled';

export const Button = ({ centered, onClick, text }) => {
  return (
    <Btn
      centered={centered}
      color="primary"
      variant="contained"
      type="submit"
      onClick={onClick}
    >
      {text}
    </Btn>
  );
};
