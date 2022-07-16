import styled from '@emotion/styled';
import DialogActions from '@mui/material/DialogActions';

export const AlertDialogActions = styled(DialogActions)`
  padding: ${({ theme: { spacing } }) => spacing(6)};
  justify-content: center;
`;
