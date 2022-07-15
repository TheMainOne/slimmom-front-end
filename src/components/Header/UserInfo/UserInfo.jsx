import useResizeAware from 'react-resize-aware';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
import { getName } from 'redux/auth/authSelector';
import { HeaderNavButtons, HeaderNavButtonsContainer } from './UserInfo.styled';
import { Alert } from './Alert/Alert';
// import { Modal } from 'components/Modal';
// import { ModalContent } from 'components/Modal/ModalContent/ModalContent';

export default function UserInfo() {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const [resizeListener] = useResizeAware();
  // const dispatch = useDispatch();
  const name = useSelector(state => getName(state));

  return (
    <HeaderNavButtonsContainer>
      {resizeListener}
      <HeaderNavButtons disableRipple color="success">
        {name}{' '}
      </HeaderNavButtons>
      {/* <HeaderNavButtons
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Exit
      </HeaderNavButtons> */}
      <Alert />
    </HeaderNavButtonsContainer>
  );
}
