import styled from 'styled-components/macro';
import { ReactComponent as iconCalendar } from 'images/icons/iconCalendar.svg';

export const DateInputStyled = styled.input`
  max-width: 130px;

  font-family: ${({ theme: { fonts } }) => fonts.verdanaBold};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  color: ${({ theme: { colors } }) => colors.$black};

  border: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 34px;
    max-width: 220px;
  }
`;

export const IconCalendar = styled(iconCalendar)``;

export const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 160;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 300px;
  }

  .react-datepicker__input-container {
    width: unset;
  }

  .react-datepicker-wrapper {
    width: unset;
  }
`;
