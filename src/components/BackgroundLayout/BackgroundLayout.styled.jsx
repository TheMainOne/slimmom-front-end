import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.$white};
`;

export { Background };
