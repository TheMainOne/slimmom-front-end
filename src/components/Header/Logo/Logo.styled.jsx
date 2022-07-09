import styled from 'styled-components';

export const LogoLink = styled.a`
  color: inherit;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    align-items: center;
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
`;

export const LogoBrandSecond = styled.img`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: block;
  }
`;
