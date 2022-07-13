import { LogoLink } from './Logo.styled';

const Logo = ({ isLogged }) => {
  return (
    <>
      <LogoLink
        href="/slimmom-front-end/"
        lang="en"
        isLogged={isLogged}
      ></LogoLink>
    </>
  );
};

export default Logo;
