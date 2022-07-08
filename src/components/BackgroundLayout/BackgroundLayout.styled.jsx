import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.$white};
`;

const ImagesContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 980px;
  height: 100%;
`;

const GreyBackgroundImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const LeavesImg = styled.img`
  position: absolute;
  right: 195px;
  bottom: 30px;
`;

const BananaImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const StrawberryImg = styled.img`
  position: absolute;
  right: 36px;
  bottom: 65px;
  width: 286px;
  height: 279;
`;

export {
  Background,
  ImagesContainer,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
};
