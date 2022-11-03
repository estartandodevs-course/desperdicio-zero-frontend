import React from 'react';
import { MenuContainer, MenuItem } from './style';
import { ReactComponent as VencidoIcon } from '../../assets/icons/itens-vencidos.svg';
import { ReactComponent as AVencerIcon } from '../../assets/icons/itens-a-vencer.svg';

function MenuList() {
  return (
    <MenuContainer>
      <MenuItem>
        <AVencerIcon />
        <p>Itens a vencer</p>
      </MenuItem>
      <MenuItem>
        <VencidoIcon />
        <p>Itens a vencer</p>
      </MenuItem>
      <MenuItem>
        <AVencerIcon />
        <p>Ir para a dispensa</p>
      </MenuItem>
    </MenuContainer>
  );
}

export default MenuList;
