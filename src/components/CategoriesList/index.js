import React from 'react';
import { Icon, MenuContainer, MenuItem } from './style';
import TodosIcon from './../../assets/icons/todos-os-itens-icon.svg';
import FrutasIcon from './../../assets/icons/fruta-icon.svg';
import CarnesIcon from './../../assets/icons/carnes-icon.svg';
import BebidasIcon from './../../assets/icons/bebidas-icon.svg';
import GraosIcon from './../../assets/icons/graos-icon.svg';

function CategoriesList({ state, fitleredState }) {
  const menuItems = [
    {
      name: 'Todos os itens',
      icon: TodosIcon,
    },
    {
      name: 'Frutas e verduras',
      icon: FrutasIcon,
    },
    {
      name: 'Carnes e frios',
      icon: CarnesIcon,
    },
    {
      name: 'Bebidas',
      icon: BebidasIcon,
    },
    {
      name: 'Grãos, cereais e farinhas',
      icon: GraosIcon,
    },
  ];

  return (
    <MenuContainer>
      {menuItems.map((item, index) => {
        const categoryName = item.name.replaceAll(' ', '-').toLowerCase();
        return (
          <MenuItem
            state={state}
            fitleredState={fitleredState}
            onClick={() => {
              state(categoryName);
              fitleredState(true);
            }}
            key={index}
          >
            <Icon src={item.icon} />
            <p>{item.name}</p>
          </MenuItem>
        );
      })}
    </MenuContainer>
  );
}

export default CategoriesList;
