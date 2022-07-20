import styled from 'styled-components';
import { IoMdReturnLeft } from 'react-icons/io';

export const IconReturnLeft = styled(IoMdReturnLeft)``;

export const MobileModalBackdrop = styled.div`
  position: fixed;
  top: calc(122px);
  left: 100%;
  width: 100%;
  height: calc(100% - 122px);

  background-color: ${({ theme }) => theme.colors.$white};
  opacity: 0.99;
  transform: translateX(-100%);
  overflow-y: auto;

  &.isHidden {
    opacity: 0.01;
    transform: translateX(0);
  }

  transition: ${({ theme: { options } }) => `${options.time} ${options.cubic}`};
  transition-property: transform opacity;
`;

export const MobileModalContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.$white};
`;
