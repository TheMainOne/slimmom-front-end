import styled from 'styled-components/macro';

const Container = styled.div`
 outline: 5px solid red;
 padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.tablet};
    padding-left: ${({ theme: { spacing } }) => spacing(8)};
    padding-right: ${({ theme: { spacing } }) => spacing(8)};
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    width: ${({ theme: { breakpoints } }) => breakpoints.desktop};
  }  */
`;

const Title = styled.h1`
font-size: 14px;
font-weight: 700;
font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
text-transform: uppercase;
color: ${({ theme: { colors } }) => colors.$orange};
text-align: center;
margin-bottom: 60px;
`

export { Container, Title };

