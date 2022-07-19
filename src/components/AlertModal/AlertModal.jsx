import { Button } from 'components/Button';
import { AlertDialogActions } from './AlertModal.styled';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AlertModal = ({
  dialogTitle,
  contentText,
  leftBtnText,
  rightBtnText,
  onClick,
  open,
  setOpen,
  leftBtnType = 'button',
  rightBtnType = 'button',
  disabledBtn,
}) => {
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
        </DialogContent>
        <AlertDialogActions>
          <Button
            variant="outlined"
            disabled={disabledBtn}
            onClick={handleClose}
            text={leftBtnText}
            type={leftBtnType}
          />
          <Button
            onClick={onClick}
            variant="contained"
            disabled={disabledBtn}
            autoFocus
            text={rightBtnText}
            type={rightBtnType}
          />
        </AlertDialogActions>
      </Dialog>
    </>
  );
};
