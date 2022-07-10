import styled from 'styled-components/macro';

const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.$white};
  z-index: 0;
`;

export { Background };
