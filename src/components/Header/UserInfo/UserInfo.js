import useResizeAware from 'react-resize-aware';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserInfo() {
  const [resizeListener, { width }] = useResizeAware();
  const dispatch = useDispatch();
  const name = useSelector(state => getName(state));

  // console.log(width, name);
  // console.log(width < 768);

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
