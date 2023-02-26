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
import { useMedia, useMobileModal } from 'hooks/ui';
import IconButton from 'components/IconButton';

export default function UserInfo() {
  const { isMobile } = useMedia();

  const name = useSelector(getName);
  const [showMobileModal, , hideMobileModal] = useMobileModal();

  return (
    <MobileContainer>
      <HeaderNavButtonsContainer>
        {showMobileModal && isMobile && (
          <ReturnButtonWrapper>
            <IconButton icon={<IconReturnLeft />} onClick={hideMobileModal} />
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
