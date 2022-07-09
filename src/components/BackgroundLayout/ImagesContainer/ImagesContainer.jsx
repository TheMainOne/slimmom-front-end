import banan from 'assets/images/banan.svg';
import strawberry from 'assets/images/strawberry.svg';
import greyBackground from 'assets/images/grey-background.svg';
import leaves from 'assets/images/leaves.svg';
import {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from './ImagesContainer.styled';

const ImagesContainer = () => {
  return (
    <ImagesWrapper>
      <GreyBackgroundImg src={greyBackground} alt="" />
      <StrawberryImg src={strawberry} alt="" />
      <LeavesImg src={leaves} alt="" />
      <BananaImg src={banan} alt="" />
    </ImagesWrapper>
  );
};

export default ImagesContainer;
