import banan from "assets/banan.svg";
import strawberry from "assets/strawberry.svg";
import greyBackground from "assets/grey-background.svg";
import leaves from "assets/leaves.svg";
import {
  Background,
  ImagesContainer,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
} from "./BackgroundLayout.styled";

const BackgroundLayout = ({ children }) => {
  return (
    <Background>
      {children}
      <ImagesContainer>
        <GreyBackgroundImg src={greyBackground} alt="" />
        <StrawberryImg src={strawberry} alt="" />
        <LeavesImg src={leaves} alt="" />
        <BananaImg src={banan} alt="" />
      </ImagesContainer>
    </Background>
  );
};

export default BackgroundLayout;
