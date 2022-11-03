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

function Home() {
  return (
    <>
      <Container>
        <Header />
        <PageTitle title={'Dados do Perfil'} />
        <GrayBackground>
          <UserCard />
          <PrimaryButton icon={<MdAddCircleOutline size={34} />} text="Adicionar itens" />
          <MenuList />
          <WasteCounter />
        </GrayBackground>
      </Container>
      <NavBar />
    </>
  );
}

export default Home;
