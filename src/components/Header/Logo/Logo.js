import { LogoLink } from './Logo.styled';

const Logo = ({ isLogged }) => {
  return (
    <>
      {isLogged ? (
        <>
          <LogoLink
            to="/diary"
            islogged={isLogged ? isLogged.toString() : undefined}
          ></LogoLink>
        </>
      ) : (
        <>
          <LogoLink
            to="/"
            islogged={isLogged ? isLogged.toString() : undefined}
          ></LogoLink>
        </>
      )}
    </>
  );
};

export default Logo;
