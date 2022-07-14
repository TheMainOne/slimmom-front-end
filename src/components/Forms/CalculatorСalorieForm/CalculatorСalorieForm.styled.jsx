import styled from 'styled-components/macro';

const Form = styled.form`
  min-width: 280px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

const Block = styled.div`
  margin-top: 12px;
`;

const InputContainer = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 204px;
    width: 510px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

export { Form, Block, InputContainer };
