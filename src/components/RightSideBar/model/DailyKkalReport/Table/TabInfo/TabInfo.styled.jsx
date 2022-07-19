import styled from 'styled-components';

export const Data = styled.td`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 130px;

  color: ${props => (props.number ? 'inherit' : props.theme.colors.$orange)};
`;

export const Unit = styled.span`
  margin-left: 5px;
  width: 27px;
`;
