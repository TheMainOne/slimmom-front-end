import useResizeAware from 'react-resize-aware';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';
import { useTranslation } from 'react-i18next';

export default function UserInfo() {
  const { t } = useTranslation();

  const [resizeListener] = useResizeAware();
  const dispatch = useDispatch();
  const name = useSelector(state => getName(state));

  return (
    <HeaderNavButtonsContainer>
      {resizeListener}
      <HeaderNavButtons>{name}</HeaderNavButtons>
      <HeaderNavButtons onClick={() => dispatch(authOperations.logOut())}>
        {t('exit')}
      </HeaderNavButtons>
    </HeaderNavButtonsContainer>
  );
}
