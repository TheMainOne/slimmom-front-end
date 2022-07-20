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
import { useMobileModal } from 'hooks/ui';
import IconButton from 'components/IconButton';

const TABLET = 768;

export default function UserInfo() {
  const [resizeListener, { width }] = useResizeAware();
  const isMobile = width < TABLET;
  const name = useSelector(getName);
  const [showMobileModal, , hideMobileModal] = useMobileModal();

  return (
    <MobileContainer>
      <HeaderNavButtonsContainer>
        {resizeListener}

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
