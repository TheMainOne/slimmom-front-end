import styled from 'styled-components';
import { IoMdReturnLeft } from 'react-icons/io';

export const IconCloseModal = styled(IoMdReturnLeft)``;

export const MobileModalStyled = styled.div`
  position: absolute;
  top: calc(-120px);
  left: 0;
  width: 100vw;
  height: calc(100vh - 120px);
`;

export const MobileModalContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.$white};
`;
