import styled from 'styled-components/macro';

const ImagesWrapper = styled.div`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
    animation-name: showBackground;
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;

    @keyframes showBackground {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const GreyBackgroundImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    bottom: -177px;
    right: -32px;
    width: 553px;
    height: 750px;
    z-index: ${props => (props.isMainPage ? '0' : '-2')};
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    width: auto;
    height: 96%;
  }
`;

// const POSITION = '229px';

const StrawberryImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    right: ${props => (props.isMainPage ? '46px' : '-65px')};
    bottom: ${props => (props.isMainPage ? '180px' : '229px')};
    z-index: ${props => (props.isMainPage ? '-1' : '0')};

    animation-name: ${props =>
      props.isMainPage ? 'rotateStawberryMain' : 'rotateStawberry'};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: slidein;

    @keyframes rotateStawberry {
      from {
        bottom: 100%;
        transform: scale(0.1);
        transform: rotate(2160deg);
      }

      to {
        bottom: 229px;
        transform: scale(1);
        transform: rotate(0deg);
      }
    }

    @keyframes rotateStawberryMain {
      from {
        bottom: 100%;
        transform: scale(0.1);
        transform: rotate(2160deg);
      }

      to {
        bottom: 180px;
        transform: scale(1);
        transform: rotate(0deg);
      }
    }
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    right: -10px;
    bottom: -15px;
    animation-name: dropStrawberry;
    animation-duration: 2s;
    animation-timing-function: slidein;

    @keyframes dropStrawberry {
      from {
        bottom: 100%;
        transform: scale(0.1);
        transform: rotate(2160deg);
      }

      to {
        bottom: -15px;
        transform: scale(1);
        transform: rotate(0deg);
      }
    }
  }
`;

const LeavesImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    bottom: ${props => (props.isMainPage ? '0' : '289px')};
    right: ${props => (props.isMainPage ? '166px' : '12px')};
    z-index: ${props => (props.isMainPage ? '0' : '-1')};

    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    right: 14%;
    bottom: 3%;
    width: auto;
    height: 100%;
    transform: rotate(0deg);
    pointer-events: none;
  }
`;

const BananaImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    right: 0;
    bottom: 0;
    animation-name: moveBanana;
    animation-duration: 1s;
    animation-timing-function: ease;
    @keyframes moveBanana {
      from {
        right: -100%;
      }

      to {
        right: 0;
      }
    }
    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    top: auto;
    bottom: 47%;

    /* pointer-events: none; */
  }
`;

export {
  ImagesWrapper,
  GreyBackgroundImg,
  LeavesImg,
  BananaImg,
  StrawberryImg,
};
