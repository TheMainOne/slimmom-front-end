import styled from 'styled-components';

export const Div = styled.div`
  &:first-child {
    margin-bottom: 40px;

    @media (min-width: 768px) {
      margin-bottom: 0px;
      margin-right: 97px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 60px;
      margin-left: 0px;
    }
  }
`;
