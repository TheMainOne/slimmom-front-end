import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { HeaderNavButtons } from '../UserInfo.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export const Alert = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HeaderNavButtons color="success" onClick={handleClickOpen}>
        Exit
      </HeaderNavButtons>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure, that you want to exit?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pressing exit button you will log out from your account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleClose}>
            Stay more
          </Button>
          <Button
            color="error"
            onClick={() => {
              dispatch(authOperations.logOut());
            }}
            autoFocus
          >
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
