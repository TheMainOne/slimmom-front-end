import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 306px;
  margin-top: ${({ theme: { spacing } }) => spacing(8)};
  padding-bottom: var(--mask-height);
  font-size: 14px;

  @media (min-width: 768px) {
    width: 610px;
    height: 244px;
    padding-right: 40px;
    overflow-y: auto;

    ::-webkit-scrollbar-button {
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 221px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme: { colors } }) => colors.$lightGrey};
      height: 40px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme: { colors } }) => colors.$blue};
    }

    /* ::-webkit-scrollbar-thumb:hover {
      background: #555;
    } */

    //Scrollbar
    //Scrollbar variables
    --mask-height: 32px;
    --padding-right: 40px;
    --mask-image-content: linear-gradient(
      to bottom,
      white var(--mask-height),
      white calc(100% - var(--mask-height)),
      transparent
    );
    --mask-size-content: calc(100% - var(--scrollbar-width));
    //end variables

    mask-size: var(--mask-size-content);
    mask-image: var(--mask-image-content);
    mask-position: bottom 50px;
    mask-repeat: no-repeat;
  }

  @media (min-width: 1280px) {
    width: 623px;
    height: 271px;
    margin-right: ${({ theme: { spacing } }) => spacing(34)};
    margin-left: auto;
  }
`;

export { List };
