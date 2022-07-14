import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 320px;
  min-height: 460px;
  height: 100%;
  padding: 40px 20px 60px 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 100px 32px 55px 32px;
    width: 768px;
    min-height: 594px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
    width: 763px;
    min-height: 850px;
    padding: 294px 32px 112px 32px;
  }
`;
