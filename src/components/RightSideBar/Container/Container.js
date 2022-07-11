import { Container, Div, Wrapper } from './Container.styled';

export const MainContainer = ({ children }) => (
  <Container>{children}</Container>
);

export const Block = ({ children }) => <Div>{children}</Div>;

export const TextContainer = ({ children }) => <Wrapper>{children}</Wrapper>;
