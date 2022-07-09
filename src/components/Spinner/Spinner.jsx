import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { hideSpinner, selectShowLoader, showSpinner } from 'redux/slices';
import { useCallback } from 'react';

const ThreeDots = props => {
  const showLoader = useSelector(selectShowLoader);
  const speed = Number(String(props.speed ?? 1));
  const fill = props.fill ?? '#fff';
  const stroke = props.stroke;
  const fillOpacity = props.fillOpacity;
  const strokeOpacity = props.strokeOpacity;

  if (!showLoader) {
    return null;
  }

  return (
    <svg
      {...{
        ...props,
        className: props.className
          ? `icon-loading ${props.className}`
          : 'icon-loading',
        fill: undefined,
        fillOpacity: undefined,
        height: props.height ?? 30,
        speed: undefined,
        stroke: undefined,
        strokeOpacity: undefined,
        strokeWidth: undefined,
        width: props.width ?? 120,
      }}
      viewBox="0 0 120 30"
    >
      <circle
        cx={15}
        cy={15}
        r={15}
        {...{ fill, stroke, fillOpacity, strokeOpacity }}
      >
        <animate
          attributeName="r"
          from={15}
          to={15}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from={1}
          to={1}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={60}
        cy={15}
        r={9}
        fillOpacity={fillOpacity ?? 0.3}
        {...{ fill, stroke, strokeOpacity }}
      >
        <animate
          attributeName="r"
          from={9}
          to={9}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from={0.5}
          to={0.5}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={105}
        cy={15}
        r={15}
        {...{ fill, stroke, fillOpacity, strokeOpacity }}
      >
        <animate
          attributeName="r"
          from={15}
          to={15}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from={1}
          to={1}
          begin="0s"
          dur={`${0.8 / speed}s`}
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export const Spinner = styled(ThreeDots).attrs(
  ({ theme, width, stroke, fill }) => ({
    stroke: stroke ?? theme?.colors?.accent ?? '#2196f3',
    fill: fill ?? theme?.colors?.accent ?? '#2196f3',
    width: width ?? 36,
    'aria-label': 'loading',
  })
)``;

export const Example = styled.div`
  display: flex;
  align-items: center;

  height: 40px;

  > button {
    background-color: #2196f3;

    :hover,
    :active {
      background-color: #2196f3aa;
      color: white;
    }
    border: none;
    margin: 0 4px;

    padding: 4px 8px;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: color, background-color;
  }
`;

export const SpinnerExample = () => {
  const dispatch = useDispatch();

  const hide = useCallback(() => dispatch(hideSpinner()), [dispatch]);
  const show = useCallback(() => dispatch(showSpinner()), [dispatch]);

  return (
    <Example>
      <button type="button" onClick={hide}>
        hide
      </button>
      <button type="button" onClick={show}>
        show
      </button>

      <Spinner />
    </Example>
  );
};
