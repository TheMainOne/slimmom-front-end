import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background: ${({ theme: { colors } }) => colors.$transparentGrey};
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  min-height: 573px;
  width: 100%;
  box-shadow: ${({ theme: { options } }) => options.dropShadow};
  background: ${({ theme: { colors } }) => colors.$white};
  color: ${({ theme: { colors } }) => colors.$black};

  @media screen and (max-width: 767px) {
    top: 65%;
    left: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  padding: 64px 81px 81px 81px;
  text-align: center;
  font-family: 'Verdana';
  margin: auto;

  color: ${({ theme: { colors } }) => colors.$black};

  @media screen and (max-width: 767px) {
    padding: 40px 20px 120px 20px;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
