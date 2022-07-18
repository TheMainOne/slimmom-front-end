import { useState } from 'react';
import { HeaderNavButton } from '../UserInfo.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { AlertModal } from 'components/AlertModal';
import { useTranslation } from 'react-i18next';

export const Alert = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const logOut = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <>
      <HeaderNavButton color="success" onClick={handleClickOpen}>
        {t('exit')}
      </HeaderNavButton>

      <AlertModal
        setOpen={setOpen}
        open={open}
        dialogTitle={'Are you sure that you want to exit?'}
        contentText={'Pressing exit button you will log out from your account'}
        leftBtnText={'Stay more'}
        rightBtnText={'Exit'}
        onClick={logOut}
      />
    </>
  );
};
