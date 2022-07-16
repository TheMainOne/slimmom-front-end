import useResizeAware from 'react-resize-aware';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';
import { Alert } from './Alert';
import { BackButton } from 'components/MobileModal';
import { useShowModal } from 'hooks/ui';

export default function UserInfo() {
  const [resizeListener] = useResizeAware();
  const name = useSelector(getName);
  const [showMobileModal, toggleModal] = useShowModal();

  return (
    <HeaderNavButtonsContainer>
      {resizeListener}

      {showMobileModal && <BackButton onClose={toggleModal} />}

      <HeaderNavButtons disableRipple color="success">
        {name}
      </HeaderNavButtons>
      <Alert />
    </HeaderNavButtonsContainer>
  );
}
