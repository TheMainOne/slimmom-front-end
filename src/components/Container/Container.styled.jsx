import styled from 'styled-components/macro';

const MainContainer = styled.div`
  width: 320px;
  padding-left: ${({ theme: { spacing } }) => spacing(5)};
  padding-right: ${({ theme: { spacing } }) => spacing(5)};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.tablet};
    padding-left: ${({ theme: { spacing } }) => spacing(8)};
    padding-right: ${({ theme: { spacing } }) => spacing(8)};
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.desktop};
  }
`;

export { MainContainer };
