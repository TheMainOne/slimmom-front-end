import { Button } from './IconButton.styled';

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  position,
  disabled,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      position={position}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
