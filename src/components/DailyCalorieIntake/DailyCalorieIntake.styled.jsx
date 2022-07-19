import styled from 'styled-components';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  width: 390px;
  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: ${({ theme: { spacing } }) => spacing(5)};

  @media screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    max-width: 280px;
    text-align: start;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 32px;

  color: ${({ theme: { colors } }) => colors.$blue};
`;
export const Span = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 16px;

  color: ${({ theme: { colors } }) => colors.$blue};

  @media screen and (max-width: 767px) {
  }
`;
export const Wrapper = styled.div`
  min-height: 300px;
`;
