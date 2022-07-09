import styled from 'styled-components';

export const MainContainer = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  color: ${({ theme: { colors } }) => colors.$grey};
  background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  padding: 40px 15px 40px 20px;

  @media (min-width: 768px) {
    display: flex;
    padding: 91px 87px;
  }

  @media (min-width: 1280px) {
    flex-direction: column;
    padding: 203px 0 0 106px;
  }
`;
