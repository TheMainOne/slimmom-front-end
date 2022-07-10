import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
const LinkLogin = styled(Link)`
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 700;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
  font-size: 14px;
  text-transform: none;
  border-radius: 30px;
  color: ${({ theme: { colors } }) => colors.$orange};
  background-color: ${({ theme: { colors } }) => colors.$white};
  border: 2px solid ${({ theme: { colors } }) => colors.$orange};
  padding: 14px 69px;
  box-shadow: none;
  margin: auto;
  margin-top: 20px;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.$white};
    border: 3px solid #e76000;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 215px;
  }
`;

export { PageContainer, Title, LinkLogin };
