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
        dialogTitle={t('alert')}
        contentText={t('warning')}
        leftBtnText={t('stay')}
        rightBtnText={t('exit')}
        onClick={logOut}
      />
    </>
  );
};
