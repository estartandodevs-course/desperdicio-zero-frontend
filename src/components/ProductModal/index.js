import React from 'react';
import { CheckSimbolContainer, CloseModal, ModalContainer, Title } from './style';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBookshelf, BsPlusLg } from 'react-icons/bs';
import MenuList from '../MenuList/index';

function ProductModal({ state }) {
  const menuItems = [
    {
      name: 'Ir para a dispensa',
      icon: BsBookshelf,
      path: '/minha-dispensa',
    },
    {
      name: 'Voltar ao início',
      icon: AiOutlineHome,
      path: '/',
    },
  ];

  return (
    <ModalContainer>
      <Title>Alimento adicionado à dispensa</Title>
      <CheckSimbolContainer>
        <AiOutlineCheckCircle />
      </CheckSimbolContainer>
      <CloseModal state={state} onClick={() => state(false)}>
        <BsPlusLg />
        <p>Adicionar outro</p>
      </CloseModal>
      <MenuList MenuItems={menuItems} />
    </ModalContainer>
  );
}

export default ProductModal;
