import { useSelector } from 'react-redux';
import ImagesContainer from './ImagesContainer';
import { Background } from './BackgroundLayout.styled';

const BackgroundLayout = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Background>
      {children}
      {!isLoggedIn && <ImagesContainer isAuth={isLoggedIn} />}
    </Background>
  );
};

export default BackgroundLayout;
