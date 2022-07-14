import styled from 'styled-components/macro';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 517px;
  }
`;
