import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, MenuContainer, MenuItem } from './style';

function MenuList({ MenuItems }) {
  return (
    <MenuContainer>
      {MenuItems.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <MenuItem>
              <Icon src={item.icon} />
              <p>{item.name}</p>
            </MenuItem>
          </Link>
        );
      })}
    </MenuContainer>
  );
}

export default MenuList;
