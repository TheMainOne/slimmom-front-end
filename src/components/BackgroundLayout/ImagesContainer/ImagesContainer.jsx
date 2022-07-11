// import banan from 'images/background/banan.svg';
import banana from 'images/background/banana.png';
import bananaTablet from 'images/background/banana-tablet.png';
import leaves from 'images/background/leaves.png';
import leavesTabletAuth from 'images/background/leaves-tablet.png';
import leavesTablet from 'images/background/leaves-tablet-auth.png';
import strawberry from 'images/background/strawberry.png';
import strawberryTablet from 'images/background/strawberry-tablet.png';
// import strawberry from 'images/background/strawberry.svg';
import greyBackground from 'images/background/grey-background.svg';
// import leaves from 'images/background/leaves.svg';
import {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from './ImagesContainer.styled';

const ImagesContainer = ({ isMainPage = false }) => {
  const tablet = window.matchMedia(
    '(min-width: 768px) and (max-width: 1279px)'
  ).matches;

  console.log(isMainPage);
  return (
    <ImagesWrapper>
      <GreyBackgroundImg src={greyBackground} alt="Grey background" />
      <StrawberryImg
        isAuthPage={isMainPage}
        src={tablet ? strawberryTablet : strawberry}
        alt="Strawberry picture"
      />
      <LeavesImg
        isMainPage={isMainPage}
        src={!tablet ? leaves : isMainPage ? leavesTablet : leavesTabletAuth}
        alt="Leaves picture"
      />
      <BananaImg src={tablet ? bananaTablet : banana} alt="Banana picture" />
    </ImagesWrapper>
  );
};

export default ImagesContainer;
