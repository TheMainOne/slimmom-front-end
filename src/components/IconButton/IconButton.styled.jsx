import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  margin-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-right: ${({ theme: { spacing } }) => spacing(1)};
  padding-left: ${({ theme: { spacing } }) => spacing(1)};
  padding: ${({ padding }) => padding};
  background-color: transparent;
  border: none;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  color: ${({ color, theme: { colors } }) => color || colors.$grey};
  cursor: pointer;

  /* & svg,
  & svg path {
    pointer-events: none;
  } */

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.$lightGrey};
    transform: scale(1.1);
  }

  &:active {
    color: ${({ theme: { colors } }) => colors.$white};
    background-color: ${({ theme: { colors } }) => colors.$orange};
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
      0 3px 14px 2px rgb(0 0 0 / 12%);
  }

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  }

  & .css-i4bv87-MuiSvgIcon-root {
    width: 18px;
    height: 18px;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
    & .css-i4bv87-MuiSvgIcon-root {
      width: 20px;
      height: 20px;
    }
  }

  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color, transform;
`;

export { Button };
