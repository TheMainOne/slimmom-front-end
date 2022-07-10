import styled from 'styled-components/macro';

const Container = styled.div`
align-items: flex-start;

 /* width: 300px; 
  padding: 40px 15px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.tablet};
    padding-left: ${({ theme: { spacing } }) => spacing(8)};
    padding-right: ${({ theme: { spacing } }) => spacing(8)};
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.desktop};
  } */
`;

const Form = styled.form`
min-width: 280px;
display:flex;
flex-direction:column;
/* align-items: stretch; */
`;

const ButtonContainer = styled.div`
display:flex;
`
const ButtonLogin = styled.button`
margin-right: 32px;

min-width: 176px;
border: none;
padding: 13px;
font-size: 14px;
line-height: 1.21;
font-weight: 700;
letter-spacing: 0.04em;
border-radius: 30px;
cursor: pointer;
&:hover {
  background-color: #e76000;
  transform: scale(1.1);
}
`
export { Container, Form, ButtonContainer, ButtonLogin};