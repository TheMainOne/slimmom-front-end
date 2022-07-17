import { Button } from './IconButton.styled';

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  position,
  disabled,
  color,
  padding,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      position={position}
      color={color}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
