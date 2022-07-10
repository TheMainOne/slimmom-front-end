import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ImagesContainer from './ImagesContainer';
import { Background } from './BackgroundLayout.styled';

// import MainPage from 'pages/MainPage/MainPage';

const BackgroundLayout = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';

  console.log('isMainPage', isMainPage);

  return (
    <Background>
      {children}
      {!isLoggedIn && (
        <ImagesContainer isMainPage={isMainPage} isAuth={isLoggedIn} />
      )}
    </Background>
  );
};

export default BackgroundLayout;
