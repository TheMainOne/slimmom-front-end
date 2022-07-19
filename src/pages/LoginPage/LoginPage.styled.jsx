import styled from 'styled-components/macro';

const PageContainer = styled.div`
  padding-bottom: 175px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-bottom: 495px;

    @media (max-width: 1279px) and (orientation: landscape) {
      padding-bottom: ${({ theme: { spacing } }) => spacing(28)};
    }
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-bottom: 255px;
  }
`;

const BoxRelative = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 700;
  padding-top: 40px;
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.$orange};
  text-align: center;
  margin-bottom: 60px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: 160px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    text-align: start;
  }
`;


export {
  PageContainer,
  Title,
  BoxRelative,
 };
