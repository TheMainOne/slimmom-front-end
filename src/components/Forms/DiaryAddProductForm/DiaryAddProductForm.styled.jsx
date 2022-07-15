import styled from 'styled-components/macro';

export const DiaryAddProductFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;

    align-items: center;
    gap: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 60px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
