import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 517px;
  }
`;
