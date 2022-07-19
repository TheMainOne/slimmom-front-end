import styled from 'styled-components';

export const Head = styled.th`
  text-align: left;
  width: 150px;
  border-right: 20px solid transparent;
  padding-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
`;

export const Row = styled.tr`
  &:last-child ${Head} {
    padding-bottom: 0px;
  }
`;
