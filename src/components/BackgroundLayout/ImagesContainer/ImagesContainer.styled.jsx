import styled from 'styled-components/macro';

const ImagesWrapper = styled.div`
  display: none;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* pointer-events: none; */
  }
`;

const GreyBackgroundImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    bottom: -187px;
    right: -32px;
    width: 553px;
    height: 750px;
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
    right: ${props => (props.route ? '-85px' : '50px')};
    bottom: ${props => (props.route ? '168px' : '188px')};
    width: ${props => (props.route ? '386px' : '286px')};
    height: ${props => (props.route ? '44.6%' : '279px')};

    /* pointer-events: none; */
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    position: absolute;
    right: -41px;
    bottom: -2%;
    width: 386px;
    height: 44.6%;
    /* pointer-events: none; */
  }
`;

const LeavesImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    right: ${props => (props.route ? '0px' : '210px')};
    bottom: ${props => (props.route ? '265px' : '-32px')};
    width: ${props => (props.route ? '740px' : '531px')};
    height: ${props => (props.route ? '842px' : '602px')};
    transform: ${props => (props.route ? 'rotate(0deg)' : 'rotate(90deg)')};
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
    /* position: absolute;
    right: 195px;
    bottom: 30px;
    pointer-events: none; */
  }
`;

const BananaImg = styled.img`
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    position: absolute;
    right: 0;
    bottom: -108px;
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
