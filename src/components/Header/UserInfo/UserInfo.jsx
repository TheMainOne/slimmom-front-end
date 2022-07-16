import useResizeAware from 'react-resize-aware';
import { useSelector } from 'react-redux';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';
import { Alert } from './Alert';

export default function UserInfo() {
  const [resizeListener] = useResizeAware();
  const name = useSelector(state => getName(state));

  return (
    <HeaderNavButtonsContainer>
      {resizeListener}
      <HeaderNavButtons disableRipple color="success">
        {name}
      </HeaderNavButtons>
      <Alert />
    </HeaderNavButtonsContainer>
  );
}
