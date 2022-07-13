import styled from 'styled-components';

export const HeaderNavButtons = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.gothamPro};
  font-size: 14px;
  font-weight: 700;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    &:first-of-type {
      margin-right: 30px;
      color: #212121;

      &:after {
        border-bottom: 32px solid #e0e0e0;
        position: absolute;
        z-index: -1;
        content: '';
        top: 26px;
        left: 616px;
        height: 32px;
        width: 2px;
      }
    }

    &:last-of-type {
      color: #9b9faa;
      cursor: pointer;
    }
  }
`;

export const HeaderNavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;
