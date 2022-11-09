import React from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import PrimaryButton from '../../components/PrimaryButton';
import UserCard from '../../components/UserCard/index';
import { MdAddCircleOutline } from 'react-icons/md';
import MenuList from '../../components/MenuList';
import { GrayBackground } from '../../components/GrayContainer/style';
import WasteCounter from '../../components/WasteCounter';
import NavBar from '../../components/NavBar';
import { Container } from '../../styles/PagesStyles/GlobalPageStyles';
import { Link } from 'react-router-dom';
import VencidoIcon from '../../assets/icons/itens-vencidos.svg';
import AVencerIcon from '../../assets/icons/itens-a-vencer.svg';
import DispensaIcon from '../../assets/icons/dispensa-icon.svg';

function Home() {
  const menuItems = [
    {
      name: 'Itens a vencer',
      icon: AVencerIcon,
      path: '#',
    },
    {
      name: 'Itens vencidos',
      icon: VencidoIcon,
      path: '#',
    },
    {
      name: 'Ir para a dispensa',
      icon: DispensaIcon,
      path: '/minha-dispensa',
    },
  ];

  return (
    <>
      <Container>
        <Header />
        <PageTitle title={'Dados do Perfil'} />
        <GrayBackground>
          <UserCard />
          <Link to="/adicionar-alimento">
            <PrimaryButton icon={<MdAddCircleOutline size={34} />} text="Adicionar itens" />
          </Link>
          <MenuList MenuItems={menuItems} />
          <WasteCounter />
        </GrayBackground>
      </Container>
      <NavBar />
    </>
  );
}

export default Home;
