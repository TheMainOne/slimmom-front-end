import { Btn } from './Button.styled';

export const Button = ({ centered, onClick }) => {
  return (
    <Btn
      centered={centered}
      color="primary"
      variant="contained"
      type="submit"
      onClick={onClick}
    >
      Start losing weight
    </Btn>
  );
};
