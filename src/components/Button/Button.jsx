import { Btn } from './Button.styled';

// variant: "contained" || outlined

export const Button = ({
  type = 'button',
  variant = 'contained',
  centered,
  onClick = () => {},
  text = '',
  disabled = false,
}) => {
  return (
    <Btn
      centered={centered}
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Btn>
  );
};
