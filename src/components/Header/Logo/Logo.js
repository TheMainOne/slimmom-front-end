import logo from '../../../images/logo/logo.png';
import logoDesktop from '../../../images/logo/logoDesktop.png';
import BrandName from '../../../images/logo/Slim.png';
import BrandNameSecond from '../../../images/logo/Mom.png';
import { LogoLink, LogoBrand, LogoBrandSecond, LogoImage } from './Logo.styled';
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = () => {
  const desktopWidth = useMediaQuery('(min-width:1280px)');

  return (
    <>
      <LogoLink href="/slimmom-front-end/" lang="en">
        {desktopWidth ? (
          <LogoImage src={logoDesktop} alt="Logo"></LogoImage>
        ) : (
          <LogoImage src={logo} alt="Logo"></LogoImage>
        )}
        <LogoBrand src={BrandName} alt="Logo"></LogoBrand>
        <LogoBrandSecond src={BrandNameSecond} alt="Logo"></LogoBrandSecond>
      </LogoLink>
    </>
  );
};

export default Logo;
