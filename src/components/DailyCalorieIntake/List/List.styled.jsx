import styled from 'styled-components';

export const OlList = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: start;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.$grey};
`;

export const Items = styled.li`
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.$grey};
`;
