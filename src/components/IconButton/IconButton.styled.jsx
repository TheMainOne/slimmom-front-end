import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  padding: ${({ buttonPadding, theme: { spacing } }) =>
    buttonPadding ? spacing(Number(buttonPadding)) : spacing(1)};
  background-color: ${({ backgroundColor, theme: { colors } }) =>
    backgroundColor ? colors[backgroundColor] : 'transparent'};
  border: none;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  color: ${({ iconColor, theme: { colors } }) =>
    iconColor ? colors[iconColor] : colors.$black};
  cursor: pointer;
  transition-property: color, background-color, box-shadow, transform;
  transition-duration: ${({ theme: { options } }) => options.time};
  transition-timing-function: ${({ theme: { options } }) => options.cubic};

  &:hover {
    background-color: ${({ hoverBgColor, theme: { colors } }) =>
      hoverBgColor ? colors[hoverBgColor] : colors.$lightGrey};
    color: ${({ hoverIconColor, theme: { colors } }) =>
      hoverIconColor ? colors[hoverIconColor] : colors.$black};
    transform: ${({ shouldScale }) => (shouldScale ? 'scale(1.05)' : 'none')};
  }

  &:active {
    color: ${({ activeIconColor, theme: { colors } }) =>
      activeIconColor ? colors[activeIconColor] : colors.$white};
    background-color: ${({ activeBgColor, theme: { colors } }) =>
      activeBgColor ? colors[activeBgColor] : colors.$orange};
    box-shadow: ${({ isShadow, theme: { colors } }) =>
      isShadow ? colors.buttonShadow : 'none'};
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.$lightGrey};
    color: ${({ theme: { colors } }) => colors.$grey};
    cursor: none;
  }

  & .css-i4bv87-MuiSvgIcon-root {
    width: 18px;
    height: 18px;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    & .css-i4bv87-MuiSvgIcon-root {
      width: 20px;
      height: 20px;
    }
  }

  /* transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color, transform; */
`;

export { Button };
