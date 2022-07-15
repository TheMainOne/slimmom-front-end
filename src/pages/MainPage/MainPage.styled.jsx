import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100%;
  padding-top: ${({ theme: { spacing } }) => spacing(8)};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: ${({ theme: { spacing } }) => spacing(25)};
    padding-bottom: ${({ theme: { spacing } }) => spacing(99)};
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: ${({ theme: { spacing } }) => spacing(36)};
    padding-bottom: ${({ theme: { spacing } }) => spacing(28)};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: 190px;
  margin-top: 68px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: 512px;
  }
`;

export { PageContainer, FormContainer };
