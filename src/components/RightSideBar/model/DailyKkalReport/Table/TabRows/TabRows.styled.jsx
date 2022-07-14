import styled from 'styled-components';

export const Head = styled.th`
  text-align: left;
  width: 150px;
  border-right: 20px solid transparent;
  padding-bottom: 14px;
  font-weight: 400;
  font-size: 14px;
`;

export const Data = styled.td`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 130px;

  color: ${props => (props.number ? 'inherit' : props.theme.colors.$orange)};
`;

export const Row = styled.tr`
  &:last-child ${Head} {
    padding-bottom: 0px;
  }
`;

export const Unit = styled.span`
  margin-left: 5px;
  width: 27px;
`;
