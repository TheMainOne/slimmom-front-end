import banana from 'images/background/banana.png';
import bananaTablet from 'images/background/banana-tablet.png';
import leaves from 'images/background/leaves.png';
import leavesTablet from 'images/background/leaves-tablet.png';
import leavesTabletAuth from 'images/background/leaves-tablet-auth.png';
import strawberry from 'images/background/strawberry.png';
import strawberryTablet from 'images/background/strawberry-tablet.png';
import greyBackground from 'images/background/grey-background.svg';
import useResizeAware from 'react-resize-aware';

import {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from './ImagesContainer.styled';

const DESKTOP_WIDTH_BREAKPOINT = 1280;
const DESKTOP_HEIGHT_BREAKPOINT = 850;

const ImagesContainer = ({ isMainPage = false }) => {
  const [resizeListener, { width, height }] = useResizeAware();
  const isTablet = width < DESKTOP_WIDTH_BREAKPOINT;
  const shouldResizeBg = height > DESKTOP_HEIGHT_BREAKPOINT;

  const strawberryImageSource = !isTablet
    ? strawberry
    : isMainPage
    ? strawberryTablet
    : strawberry;

  const leavesImageSource = !isTablet
    ? leaves
    : isMainPage
    ? leavesTablet
    : leavesTabletAuth;

  const bananaImageSource = isTablet ? bananaTablet : banana;

  return (
    <ImagesWrapper>
      {resizeListener}
      <GreyBackgroundImg
        shouldResizeBg={shouldResizeBg}
        src={greyBackground}
        alt="Grey background"
      />
      <StrawberryImg
        isMainPage={isMainPage}
        src={strawberryImageSource}
        alt="Strawberry picture"
      />
      <LeavesImg
        isMainPage={isMainPage}
        src={leavesImageSource}
        alt="Leaves picture"
      />
      <BananaImg src={bananaImageSource} alt="Banana picture" />
    </ImagesWrapper>
  );
};

export default ImagesContainer;
