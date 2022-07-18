import styled from 'styled-components';

const ListEmptyTitle = styled.p`
  position: relative;
  margin-top: 20px;
  font-weight: 700;
  font-size: 18px;
  animation-name: appearence;
  animation-duration: ${({ theme: { options } }) => options.time};
  animation-timing-function: ${({ theme: { options } }) => options.cubic};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.$white};
    opacity: 0.5;
    transform: translateX(-50px) skewX(-45deg);
    animation-name: blink;
    animation-duration: 750ms;
    animation-timing-function: ease-out;
    animation-delay: 500ms;
  }

  @keyframes blink {
    from {
      transform: translateX(-50px) skewX(-45deg);
    }

    to {
      transform: translateX(5000%) skewX(-45deg);
    }
  }

  @keyframes appearence {
    from {
      font-size: 0px;
      margin-top: 0px;
    }

    to {
      opacity: 1;
      font-size: 18px;
      margin-top: 20px;
    }
  }
`;
export { ListEmptyTitle };
