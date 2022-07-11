import { Container, Div, Wrapper } from './Container.styled';

export const MainContainer = ({ children }) => (
  <Container>{children}</Container>
);

export const TextContainer = ({ children }) => <Wrapper>{children}</Wrapper>;

export const Block = ({ children }) => <Div>{children}</Div>;
