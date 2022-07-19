import styled from 'styled-components/macro';

const Form = styled.form`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    align-items: start;
  }
`;

const BoxButton = styled.div`
  margin: auto;
  margin-top: 60px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin: 60px 0 0 0;
  }
`;

export { Form, BoxButton };
