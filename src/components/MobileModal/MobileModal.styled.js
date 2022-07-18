import styled from 'styled-components';
import { IoMdReturnLeft } from 'react-icons/io';

export const IconReturnLeft = styled(IoMdReturnLeft)``;

export const MobileModalBackdrop = styled.div`
  position: fixed;
  top: calc(122px);
  left: 0;
  width: 100%;
  height: calc(100% - 122px);

  background-color: ${({ theme }) => theme.colors.$white};
`;

export const MobileModalContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.$white};
`;
