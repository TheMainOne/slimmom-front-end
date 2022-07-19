import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 100px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: 160px;
    padding-bottom: 419px;
    @media (max-width: 1279px) and (orientation: landscape) {
      padding-bottom: ${({ theme: { spacing } }) => spacing(28)};
    }
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-bottom: 179px;
  }
`;

const BoxRelative = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BoxButton = styled.div`
  margin: auto;
  margin-top: 20px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    bottom: 0;
    left: 215px;
  }
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.$orange};
  text-align: center;
  margin-bottom: 60px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    text-align: start;
  }
`;
const LinkLog = styled(Link)`
  margin: auto;
`;

export { PageContainer, Title, LinkLog, BoxRelative, BoxButton };
