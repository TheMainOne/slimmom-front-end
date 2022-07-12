import useResizeAware from 'react-resize-aware';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';

export default function UserInfo() {
  const [resizeListener, { width }] = useResizeAware();
  const dispatch = useDispatch();
  const name = useSelector(state => getName(state));

  return (
    <HeaderNavButtonsContainer>
      {resizeListener}
      <HeaderNavButtons>{name}</HeaderNavButtons>
      <HeaderNavButtons onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </HeaderNavButtons>
    </HeaderNavButtonsContainer>
  );
}
