import { Btn } from './Button.styled';
import { useTranslation } from 'react-i18next';

export const Button = ({ centered, onClick }) => {
  const { t } = useTranslation();

  return (
    <Btn
      centered={centered}
      color="primary"
      variant="contained"
      type="submit"
      onClick={onClick}
    >
      {t('start')}
    </Btn>
  );
};
