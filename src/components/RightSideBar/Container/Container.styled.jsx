import styled from 'styled-components';
import backgroundUrl from 'static/images/Layer-4.png';

export const Container = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  color: ${({ theme: { colors } }) => colors.$grey};
  background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  padding: 40px 15px 40px 20px;
  background-image: url(${backgroundUrl});
  background-repeat: no-repeat;
  background-position: right 30px bottom 20px;

  @media (min-width: 768px) {
    display: flex;
    padding: 91px 87px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    padding: 203px 0 0 106px;
  }
`;

export const Wrapper = styled.div``;

export const Div = styled.div`
  &:first-child {
    margin-bottom: 40px;

    @media (min-width: 768px) {
      margin-bottom: 0px;
      margin-right: 97px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 60px;
      margin-left: 0px;
    }
  }
`;
