import styled from "styled-components";

const PageContainer = styled.div`
  height: 100%;
  padding-top: ${({ theme: { spacing } }) => spacing(8)};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: ${({ theme: { spacing } }) => spacing(12)};
  }
`;

export { PageContainer };
