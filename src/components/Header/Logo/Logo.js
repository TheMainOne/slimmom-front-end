import { LogoLink } from './Logo.styled';

const Logo = ({ islogged }) => {
  return (
    <>
      <LogoLink to="/" islogged={islogged}></LogoLink>
    </>
  );
};

export default Logo;
