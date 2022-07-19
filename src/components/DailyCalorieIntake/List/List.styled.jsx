import styled from 'styled-components';
export const ListWrapper = styled.div`
  min-height: 220px;
  text-align: start;
`;
export const OlList = styled.ol`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: start;
  padding: 20px;

  color: ${({ theme: { colors } }) => colors.$grey};
  @media screen and (max-width: 767px) {
    text-align: start;
  }
`;

export const Items = styled.li`
  margin-bottom: 10px;

  color: ${({ theme: { colors } }) => colors.$grey};
`;

export const ListTitle = styled.h3`
  text-align: start;
  ::before {
    content: '';
    width: 330px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    @media screen and (max-width: 767px) {
      width: 280px;
    }
  }
  @media screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
`;
