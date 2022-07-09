import ImagesContainer from './ImagesContainer';
import { Background } from './BackgroundLayout.styled';

const BackgroundLayout = ({ children }) => {
  return (
    <Background>
      {children}
      <ImagesContainer />
    </Background>
  );
};

export default BackgroundLayout;
