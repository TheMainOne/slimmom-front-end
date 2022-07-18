import styled from 'styled-components';

const List = styled.ul`
  //Scrollbar variables
  --mask-height: 40px;
  --padding-right: 40px;
  --mask-image-content: linear-gradient(
    to bottom,
    white var(--mask-height),
    white calc(100% - var(--mask-height)),
    transparent
  );
  --mask-size-content: calc(100% - var(--scrollbar-width));
  //end variables

  display: flex;
  flex-direction: column;
  width: 300px;
  height: 220px;
  margin-top: ${({ theme: { spacing } }) => spacing(8)};
  margin-right: 5%;
  font-size: 14px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.$lightGrey};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.$blue};
  }

  mask-size: var(--mask-size-content);
  mask-image: var(--mask-image-content);
  mask-position: bottom 40px;
  mask-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 610px;
    height: 260px;
    padding-right: 32px;
    margin-right: 0;
  }

  @media (min-width: 1280px) {
    width: 623px;
    height: 306px;
  }
`;

export { List };
