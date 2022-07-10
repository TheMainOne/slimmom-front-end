import styled from 'styled-components/macro';

export const DiaryPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  height: 60vh;

  outline: 1px solid black;

`;



export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

  @media (min-width: 1280px) {
flex-direction: row;

  }
  
`