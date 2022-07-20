import { ReactComponent as iconCalendar } from 'images/icons/iconCalendar.svg';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const DateInputStyled = styled(TextField)`
  && {
    max-width: 116px;
    height: 20px;
    font-family: ${({ theme: { fonts } }) => fonts.verdanaBold};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
    color: ${({ theme: { colors } }) => colors.$black};

    border: none;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 34px;
      height: 38px;
      max-width: 220px;
    }
  }
`;

export const IconCalendar = styled(iconCalendar)``;

export const CalendarWrapper = styled('div')`
  display: flex;
  align-items: center;
  max-width: 160;
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 300px;
    margin-bottom: 60px;
  }

  .react-datepicker__input-container {
    width: unset;
  }

  .react-datepicker-wrapper {
    width: unset;
  }
`;
