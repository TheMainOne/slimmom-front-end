import banan from 'images/background/banan.svg';
import strawberry from 'images/background/strawberry.svg';
import greyBackground from 'images/background/grey-background.svg';
import leaves from 'images/background/leaves.svg';
import {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from './ImagesContainer.styled';

const ImagesContainer = ({ route = '' }) => {
  return (
    <ImagesWrapper>
      <GreyBackgroundImg src={greyBackground} alt="" />
      <StrawberryImg route={route} src={strawberry} alt="" />
      <LeavesImg route={route} src={leaves} alt="" />
      <BananaImg src={banan} alt="" />
    </ImagesWrapper>
  );
};

export default ImagesContainer;
