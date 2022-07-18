import styled from 'styled-components';

const Title = styled.h1`
  width: 280px;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Verdana Bold';
  line-height: ${({ theme: { lineHeight } }) => lineHeight.pageTitleHeight};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: 550px;
    font-size: 34px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  }
`;

export { Title };
