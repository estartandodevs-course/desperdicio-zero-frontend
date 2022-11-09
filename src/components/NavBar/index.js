import React from 'react';
import { MenuOptionWraper, NavBarContainer } from './style';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBookshelf, BsPerson, BsPlusLg } from 'react-icons/bs';
import { SlGraph } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const menuItems = [
    {
      route: '/',
      icon: AiOutlineHome,
    },
    {
      route: '/adicionar-alimento',
      icon: BsPlusLg,
    },
    {
      route: '/minha-dispensa',
      icon: BsBookshelf,
    },
    {
      route: '/perfil',
      icon: BsPerson,
    },
    {
      route: '/analise',
      icon: SlGraph,
    },
  ];

  const currentPath = useLocation().pathname;

  return (
    <>
      <NavBarContainer>
        {menuItems.map((item, index) => {
          return (
            <MenuOptionWraper key={index} isSelected={currentPath === item.route ? true : false}>
              <Link to={`${item.route}`}>
                <item.icon />
              </Link>
            </MenuOptionWraper>
          );
        })}
      </NavBarContainer>
    </>
  );
}

export default NavBar;
