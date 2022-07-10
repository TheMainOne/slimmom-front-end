import ImagesContainer from './ImagesContainer';
import { Background } from './BackgroundLayout.styled';
// import MainPage from 'pages/MainPage/MainPage';

const BackgroundLayout = ({ children }) => {
  return (
    <Background>
      <ImagesContainer route="auth" />
      {children}
    </Background>
  );
};

export default BackgroundLayout;
