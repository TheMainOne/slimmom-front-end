import Logo from "../Logo";
import { HeaderStyled, HeaderLink } from "./Navigation.styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <Logo />
          <div>{/* <HeaderLink to="/">Sign in</HeaderLink> */}</div>
        </nav>
      </HeaderStyled>
    </>
  );
};

export default Header;
