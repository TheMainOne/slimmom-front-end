import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

import styled from 'styled-components';

// export const Loader = styled(ThreeDots)`
//   padding: 10px;
//   color: red;
// `;

export const Spiner = () => (
  <ThreeDots color="grey" width="30px" height="30px" />
);
