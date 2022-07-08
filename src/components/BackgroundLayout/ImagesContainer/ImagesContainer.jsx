import banan from "assets/banan.svg";
import strawberry from "assets/strawberry.svg";
import greyBackground from "assets/grey-background.svg";
import leaves from "assets/leaves.svg";
import {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from "./ImagesContainer.styled";

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
