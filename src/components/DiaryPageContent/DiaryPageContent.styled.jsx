import styled from 'styled-components/macro';

export const DiaryPageContentStyled = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 160px;
  padding-bottom: 60px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 180px;
    padding-top: 56px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 294px;
    padding-bottom: 112px;
    justify-content: center;
    align-items: center;

    width: 763px;
    margin: 0 auto;
  }
`;

export const DiaryPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  /* height: 60vh; */

  outline: 1px solid black;
`;
