import styled from 'styled-components';
import Popover from '@mui/material/Popover';

const ListItem = styled.li`
  display: flex;
  &:not(:first-child) {
    padding-top: ${({ theme: { spacing } }) => spacing(4)};
  }
`;

const Title = styled.div`
  position: relative;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(:first-child) {
    text-align: right;
  }

  &:first-child {
    width: 130px;
    margin-right: 8px;

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 240px;
      margin-right: 22px;
    }
  }

  &:nth-child(2) {
    width: 49px;
    margin-right: 8px;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 106px;
      margin-right: 46px;
    }

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
      width: 106px;
      margin-right: 48px;
    }
  }

  &:nth-child(3) {
    width: 65px;
    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
      width: 106px;
      margin-right: 26px;
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ theme: { spacing } }) => spacing(1)};
`;

const PopoverStyled = styled(Popover)`
  & .MuiPaper-root {
    background-color: ${({ theme: { colors } }) => colors.$lightGrey};
  }

  & .MuiTypography-root {
    font-size: 14px;
  }
`;

export { ListItem, Title, Text, Measure, ButtonContainer, PopoverStyled };
