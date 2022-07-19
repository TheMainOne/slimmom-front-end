import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const StyledForm = styled(FormControl)`
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiSvgIcon-root {
    fill: ${({ theme: { colors } }) => colors.$grey};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
    padding: 0;

    right: ${props => (props.islogged ? '0px' : '8px')};
    top: ${props => (props.islogged ? '0px' : '85px')};
    position: ${props => (props.islogged ? 'relative' : 'absolute')};
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
