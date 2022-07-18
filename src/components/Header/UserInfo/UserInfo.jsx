import useResizeAware from 'react-resize-aware';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelector';
import {
  HeaderNavButtons,
  HeaderNavButtonsContainer,
  IconReturnLeft,
  MobileContainer,
  ReturnButtonWrapper,
} from './UserInfo.styled';
import { Alert } from './Alert';
import { useShowModal } from 'hooks/ui';
import IconButton from 'components/IconButton';

export default function UserInfo() {
  const [resizeListener] = useResizeAware();
  const name = useSelector(getName);
  const [showMobileModal, toggleModal] = useShowModal();

  return (
    <MobileContainer>
      <HeaderNavButtonsContainer>
        {resizeListener}

        {showMobileModal && (
          <ReturnButtonWrapper>
            <IconButton icon={<IconReturnLeft />} onClick={toggleModal} />
          </ReturnButtonWrapper>
        )}

        <HeaderNavButtons disableRipple color="success">
          {name}
        </HeaderNavButtons>
        <Alert />
      </HeaderNavButtonsContainer>
    </MobileContainer>
  );
}
