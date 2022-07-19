import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: ${({ theme: { lineHeight } }) => lineHeight.verdanaHeight};
  text-align: center;
  font-family: 'Verdana';
  margin: auto;
  margin-top: 64px;

  color: ${({ theme: { colors } }) => colors.$black};
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
