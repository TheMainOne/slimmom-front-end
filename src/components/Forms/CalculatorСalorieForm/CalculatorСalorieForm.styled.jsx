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
  margin-top: 19px;
`;

const InputContainer = styled.div`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    display: flex;
    width: 510px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    align-items: flex-start;
  }
`;

const Wrapper = styled.div``;

const BoxButton = styled.div`
  margin: auto;
  margin-top: 40px;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    margin: 28px 0 0;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    margin-left: auto;
    margin-right: 0;
  }
`;

export { Form, Block, InputContainer, Wrapper, BoxButton };
