import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { HeaderContainer } from './style';

function Header() {
  return (
    <>
      <HeaderContainer>
        <GiHamburgerMenu size={18} />
        <Logo />
      </HeaderContainer>
    </>
  );
}

export default Header;
