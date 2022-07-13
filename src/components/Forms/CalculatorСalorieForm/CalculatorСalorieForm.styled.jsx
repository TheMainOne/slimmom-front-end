import styled from 'styled-components/macro';

const Form = styled.form`
  min-width: 280px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    align-items: start;
  }
`;

export { Form };
