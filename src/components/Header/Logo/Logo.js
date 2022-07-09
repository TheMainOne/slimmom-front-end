import logo from '../../../images/logo/logo.png';
import BrandName from '../../../images/logo/Slim.png';
import BrandNameSecond from '../../../images/logo/Mom.png';
import { LogoLink, LogoBrand, LogoBrandSecond, LogoImage } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <LogoLink href="/" lang="en">
        <LogoImage src={logo} alt="Logo"></LogoImage>
        <LogoBrand src={BrandName} alt="Logo"></LogoBrand>
        <LogoBrandSecond src={BrandNameSecond} alt="Logo"></LogoBrandSecond>
      </LogoLink>
    </>
  );
};

export default Logo;
