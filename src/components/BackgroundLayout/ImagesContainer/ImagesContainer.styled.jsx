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
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* pointer-events: none; */
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
    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    width: auto;
    height: 96%;
    /* pointer-events: none; */
  }
`;

const StrawberryImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    right: ${props => (props.isMainPage ? '46px' : '-65px')};
    bottom: ${props => (props.isMainPage ? '180px' : '229px')};
    z-index: ${props => (props.isMainPage ? '-1' : '0')};

    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    right: -10px;
    bottom: -15px;
    /* pointer-events: none; */
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
    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    right: 0;
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
