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
// buttonPadding = 1, 4*2=8 - вказуємо 2
// disabled = false
// icon = your icon component
// onClick = your handler

const IconButton = ({
  type = 'button',
  icon,
  onClick = () => {},
  disabled = false,
  iconColor = null,
  backgroundColor = null,
  hoverBgColor = null,
  hoverIconColor = null,
  activeIconColor = null,
  activeBgColor = null,
  shouldScale = null,
  isShadow = null,
  buttonPadding = null,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      hoverBgColor={hoverBgColor}
      hoverIconColor={hoverIconColor}
      activeIconColor={activeIconColor}
      activeBgColor={activeBgColor}
      shouldScale={shouldScale}
      isShadow={isShadow}
      buttonPadding={buttonPadding}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
