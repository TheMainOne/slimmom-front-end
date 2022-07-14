import { LogoLink } from './Logo.styled';

const Logo = ({ isLogged }) => {
  return (
    <>
      <LogoLink
        to="/"
        islogged={isLogged ? isLogged.toString() : undefined}
      ></LogoLink>
    </>
  );
};

export default Logo;
