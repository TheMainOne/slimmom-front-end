import styled from 'styled-components';

export const LogoLink = styled.a`
  color: inherit;
  position: relative;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    align-items: baseline;

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
