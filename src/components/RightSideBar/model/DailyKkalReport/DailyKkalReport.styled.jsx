import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TabHead = styled.th`
  text-align: left;
  width: 150px;
  border-right: 20px solid transparent;
  padding-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
`;

export const TabData = styled.td`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 130px;
`;

export const TabRows = styled.tr`
  &:last-child ${TabHead} {
    padding-bottom: 0px;
  }
`;
