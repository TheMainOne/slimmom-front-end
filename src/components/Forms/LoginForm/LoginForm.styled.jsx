import styled from 'styled-components/macro';

const MainContainer = styled.div`

background-color:blue;
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
@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
  align-items: start;

 }

`;


export { MainContainer, Form };