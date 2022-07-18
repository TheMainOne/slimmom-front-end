import { Button } from './IconButton.styled';

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  position,
  disabled,
  iconColor = null,
  backgroundColor = null,
  hoverBgColor = null,
  hoverIconColor = null,
  activeIconColor = null,
  activeBgColor = null,
  shouldScale = null,
  isShadow = null,
  buttonPudding = null,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      position={position}
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      hoverBgColor={hoverBgColor}
      hoverIconColor={hoverIconColor}
      activeIconColor={activeIconColor}
      activeBgColor={activeBgColor}
      shouldScale={shouldScale}
      isShadow={isShadow}
      buttonPudding={buttonPudding}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
