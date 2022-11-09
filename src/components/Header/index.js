import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { HeaderContainer } from './style';

function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </>
  );
}

export default Header;
