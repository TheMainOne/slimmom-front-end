import styled from 'styled-components';
import backgroundUrl from 'images/secondBackground/Layer-4.svg';
import tabletBackgroundUrl from 'images/secondBackground/Layer-5.svg';

export const Container = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  color: ${({ theme: { colors } }) => colors.$grey};
  background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-repeat: no-repeat;
  padding: 40px 15px 84px 20px;

  @media (min-width: 768px) {
    width: 768px;
    min-height: 350px;
    display: flex;
    justify-content: flex-start;
    padding: 91px 10px 91px 87px;

    background-size: 369px 350px;
    background-position: 399px bottom;
    background-image: url(${tabletBackgroundUrl});
  }

  @media (min-width: 1280px) {
    width: 517px;
    min-height: 850px;
    height: 100vh;
    padding: 292px 0 0 106px;
    flex-direction: column;
    justify-content: flex-start;

    background-size: 505px 815px;
    background-position: 35px 12px;
    background-image: url(${backgroundUrl});
  }
`;

export const Div = styled.div`
  width: 285px;

  @media (min-width: 768px) {
    width: 350px;
  }

  &:first-child {
    width: 280px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      width: 252px;
      margin-bottom: 0px;
      margin-right: 60px;
    }

    @media (min-width: 1280px) {
      width: 270px;
      margin-bottom: 60px;
      margin-left: 0px;
    }
  }
`;
