import styled from 'styled-components';
import { IoMdReturnLeft } from 'react-icons/io';

export const HeaderNavButtons = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  font-size: 14px;
  font-family: 'Gotham Pro';
  font-weight: 700;
  height: 80%;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &:first-of-type {
    border-right: 2px solid #e0e0e0;
    padding-right: 16px;
  }

  &:last-of-type {
    margin-right: 16px;
    color: #9b9faa;
    padding-left: 16px;
  }
  &:not(:last-child) {
    color: #212121;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-of-type {
      position: inherit;
      margin-right: 0px;
      padding-right: 15px;
      border-right: 2px solid #e0e0e0;
      color: #212121;

      &:after {
        display: none;
      }
    }

    &:last-of-type {
      /* color: #9b9faa; */
      cursor: pointer;
      padding-left: 15px;
    }
  }
`;

export const MobileContainer = styled.div`
  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    background-color: #eff1f3;
  }
`;

export const HeaderNavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 40px;
  width: 100%;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    max-width: 320px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    background-color: inherit;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    align-items: inherit;
  }
`;

export const HeaderNavButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  font-size: 14px;
  font-weight: 700;
  color: #9b9faa;
  height: 80%;
  background: none;

  @media screen and (max-width: calc(${({ theme }) =>
      theme.breakpoints.tablet} - 1px)) {
    padding-right: 0;
    padding-left: 0;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    padding-left: 15px;
    margin-right: 20px;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    margin-right: 0;
  }
`;

export const ReturnButtonWrapper = styled.div`
  max-height: 40px;
  margin-right: auto;
  > button {
    padding: 8px 10px;
    color: #212121;
  }
`;

export const IconReturnLeft = styled(IoMdReturnLeft)``;
