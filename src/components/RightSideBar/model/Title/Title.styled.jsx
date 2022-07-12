import styled from 'styled-components';

export const Text = styled.h3`
  font-family: 'Verdana';
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.$black};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 22px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;
