import { Button } from './IconButton.styled';

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  position,
  disabled,
  customBtn = '',
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      position={position}
      customBtn={customBtn}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
