import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './style';

function MenuList({ MenuItems }) {
  return (
    <MenuContainer>
      {MenuItems.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <MenuItem>
              <item.icon />
              <p>{item.name}</p>
            </MenuItem>
          </Link>
        );
      })}
    </MenuContainer>
  );
}

export default MenuList;
