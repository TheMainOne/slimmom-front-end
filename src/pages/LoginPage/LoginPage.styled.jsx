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

const DefaultData = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  text-transform: lowercase;
  color: ${({ theme: { colors } }) => colors.$orange};
  text-align: start;
`;
const DefaultText = styled.p`
  margin-top: 30px;
  margin-bottom: 15px;
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  text-transform: lowercase;
  color: ${({ theme: { colors } }) => colors.$orange};
  text-align: start;
`;
const DefaultLogin = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  color: ${({ theme: { colors } }) => colors.$grey};
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Span = styled.span`
  color: ${({ theme: { colors } }) => colors.$orange};
`;
export {
  PageContainer,
  Title,
  BoxRelative,
  DefaultLogin,
  DefaultData,
  DefaultText,
  Span,
};
