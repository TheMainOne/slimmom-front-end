import styled from 'styled-components/macro';

export const DiaryPageContentStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  padding: 160px 20px 60px 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 180px 32px 55px 32px;
    width: 768px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: center;
    justify-content: center;
    width: 763px;

    padding: 294px 32px 112px 32px;
  }
`;

export const DiaryPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* height: 60vh; */
`;
