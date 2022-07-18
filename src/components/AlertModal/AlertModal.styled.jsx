import styled from '@emotion/styled';
import DialogActions from '@mui/material/DialogActions';

export const AlertDialogActions = styled(DialogActions)`
  padding: ${({ theme: { spacing } }) => spacing(6)};
  justify-content: center;
  flex-direction: column;

  & button:not(:last-child) {
    margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  }

  & button:last-child {
    margin-left: 0px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    flex-direction: row;

    & button:not(:last-child) {
      margin-bottom: 0;
    }

    & button:last-child {
      margin-left: ${({ theme: { spacing } }) => spacing(2)};
    }
  }

  @media (max-width: 767px) and (orientation: landscape) {
    flex-direction: row;

    & button:not(:last-child) {
      margin-bottom: 0;
    }

    & button:last-child {
      margin-left: ${({ theme: { spacing } }) => spacing(2)};
    }
  }
`;
