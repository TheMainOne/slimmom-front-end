import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100%;
  padding-top: ${({ theme: { spacing } }) => spacing(8)};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: ${({ theme: { spacing } }) => spacing(25)};
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: ${({ theme: { spacing } }) => spacing(36)};
  }
`;

const FormContainer = styled.div`
  max-width: 512px;
  height: 190px;
  margin-top: 68px;
  background-color: violet;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: 100%;
  }
`;

export { PageContainer, FormContainer };
