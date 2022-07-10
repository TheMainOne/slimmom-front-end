import styled from 'styled-components/macro';

const PageContainer = styled.div`

display: flex;
flex-direction: column; 
   position:relative;
`;

const Title = styled.h1`
font-size: 14px;
font-weight: 700;
margin-top: 160px;
font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
text-transform: uppercase;
color: ${({ theme: { colors } }) => colors.$orange};
text-align: center;
margin-bottom: 60px;
@media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    text-align: start;
  }
`

export { PageContainer, Title };

