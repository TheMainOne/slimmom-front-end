import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export const StyledSelect = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 0;
    left: -5px;
    top: -5px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 2px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 6px;
  }
`;
export const StyledForm = styled(FormControl)`
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 0;
    left: 0;
    top: 7px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -2px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 6px;
  }
  /* & .MuiSelect-outlined {
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-right: 25px;
    }
  } */
`;
