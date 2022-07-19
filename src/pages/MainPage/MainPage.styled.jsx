import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100%;
  padding-top: ${({ theme: { spacing } }) => spacing(8)};

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: ${({ theme: { spacing } }) => spacing(25)};
    padding-bottom: ${({ theme: { spacing } }) => spacing(99)};

    @media (max-width: 1279px) and (orientation: landscape) {
      padding-bottom: ${({ theme: { spacing } }) => spacing(28)};
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: ${({ theme: { spacing } }) => spacing(36)};
    padding-bottom: ${({ theme: { spacing } }) => spacing(28)};
  }
`;

const FormContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin-top: 62px;
    width: 512px;
  }
`;

export { PageContainer, FormContainer };
