import styled from 'styled-components';

export const ModalContainer = styled.div`
  padding: 64px 81px 0;
  text-align: center;
  font-family: 'Verdana';

  color: ${({ theme: { colors } }) => colors.$black};
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  width: 390px;
  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: ${({ theme: { spacing } }) => spacing(8)};
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 0.04em;

  color: ${({ theme: { colors } }) => colors.$blue};
`;

export const ListTitle = styled.h3`
  text-align: start;
`;
