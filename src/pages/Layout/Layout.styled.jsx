import styled from 'styled-components';

export const LayoutStyles = styled.div`
  height: 100%;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    height: 100%;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    height: 100%;
  }
`;
