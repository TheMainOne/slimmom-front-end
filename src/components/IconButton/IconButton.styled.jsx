import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  margin-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
  padding-right: ${({ theme: { spacing } }) => spacing(1)};
  padding-left: ${({ theme: { spacing } }) => spacing(1)};
  background-color: transparent;
  border: none;
  border-radius: 50%;
  box-shadow: none;
  outline: none;
  color: ${({ theme: { colors } }) => colors.$grey};
  cursor: pointer;

  /* & svg,
  & svg path {
    pointer-events: none;
  } */

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.$orange};
    color: ${({ theme: { colors } }) => colors.$white};
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
`;

export { Button };
