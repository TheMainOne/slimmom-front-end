import logo from "../../../images/logo/logo.png";
import { LogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <>
      <LogoLink href="/" lang="en">
        <img src={logo} alt="Logo"></img>
      </LogoLink>
    </>
  );
};

export default Logo;
