import styled from 'styled-components';
import logoMobile from '../../../images/logo/logo-mobile.svg';
import logoTablet from '../../../images/logo/logo-tablet.svg';
import logoDesktop from '../../../images/logo/logo-desktop.svg';

export const LogoLink = styled.a`
  display: block;
  color: inherit;
  position: relative;
  background-image: url(${logoMobile});
  width: 47px;
  height: 44px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    background-image: url(${logoTablet});
    width: 162px;
    height: 44px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    align-items: baseline;
    background-image: url(${logoDesktop});
    width: 167px;
    height: 66px;

    &:after {
      border-bottom: 32px solid #e0e0e0;
      position: absolute;
      z-index: -1;
      content: '';
      top: 60%;
      left: 108%;
      height: 32px;
      width: 2px;
    }
  }
`;

export const LogoImage = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin-right: 11px;
  }
`;

export const LogoBrand = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: block;
    margin-right: 5px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoBrandSecond = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: block;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    display: none;
  }
`;
