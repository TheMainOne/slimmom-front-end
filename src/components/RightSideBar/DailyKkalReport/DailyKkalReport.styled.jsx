import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  //   padding: 0;
`;

export const TabHead = styled.th`
  text-align: left;
  width: 150px; //change
  border-right: 20px solid transparent; //change
  padding-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
`;

export const TabData = styled.td`
  text-align: right;
  width: 130px;
`;

export const TabRows = styled.tr`
  &:last-child ${TabHead} {
    padding-bottom: 0px;
  }
`;
