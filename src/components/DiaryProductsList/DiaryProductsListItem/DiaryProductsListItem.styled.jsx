import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing(5)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(2)};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    text-align: right;
  }

  &:first-child {
    width: 130px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 240px;
    }
  }

  &:nth-child(2) {
    width: 49px;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 106px;
    }
  }

  &:nth-child(3) {
    width: 58px;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 106px;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-top: ${({ theme: { spacing } }) => spacing(4)};
    padding-bottom: ${({ theme: { spacing } }) => spacing(5)};
  }
`;

const Text = styled.span`
  margin-right: ${({ theme: { spacing } }) => spacing(1)};
`;

const Measure = styled.span`
  font-size: 10px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export { ListItem, Title, Text, Measure };
