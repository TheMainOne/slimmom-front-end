import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 40px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: 160px;
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

export { PageContainer, Title, LinkLog };
