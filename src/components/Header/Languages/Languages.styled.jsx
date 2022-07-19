import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const StyledForm = styled(FormControl)`
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 85px;
    right: 8px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    top: -2px;
    right: 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 8px;
  }
  & .MuiOutlinedInput-root {
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin: 0;
      padding: 0;
      left: 20px;
      top: -5px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 2px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 3px;
      left: 6px;
    }
  }
`;

export const StyledSelect = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;
