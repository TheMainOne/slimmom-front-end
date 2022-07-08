import styled from 'styled-components/macro';

const Title = styled.h1`
  margin-bottom: ${({ theme: { spacing } }) => spacing(5)};
`;
const FirstListItem = styled.li`
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  font-weight: 700;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
`;

const SecondListItem = styled.li`
  background-color: ${({ theme: { colors } }) => colors.$orange};
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(5)};
  padding-left: ${({ theme: { spacing } }) => spacing(10)};
`;

const ThirdListItem = styled.li`
  width: 250px;
  margin-top: ${({ theme: { spacing } }) => spacing(3)};
  margin-left: ${({ theme: { spacing } }) => spacing(3)};
  border: 1px solid ${({ theme: { colors } }) => colors.$grey};
  box-shadow: ${({ theme: { options } }) => options.buttonShadow}; ;
`;

export { Title, FirstListItem, SecondListItem, ThirdListItem };
