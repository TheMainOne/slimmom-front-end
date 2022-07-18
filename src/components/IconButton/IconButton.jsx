import { Button } from './IconButton.styled';

// Default styles
//
// iconColor = "$black",
// backgroundColor = "transparent",
// hoverBgColor = "$lightGrey",
// hoverIconColor = "$grey",
// activeIconColor = "$white",
// activeBgColor = "$orange",
// shouldScale = false,
// isShadow = false,
// buttonPudding = 1,
// disabled = false
// icon = your icon component
// onClick = your handler

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  position,
  disabled = false,
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
