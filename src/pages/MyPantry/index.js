import React from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import PageTitle from '../../components/PageTitle';
import ProductList from '../../components/ProductList';
import { Container } from '../../styles/PagesStyles/GlobalPageStyles';

function MyPantry() {
  return (
    <Container>
      <Header />
      <PageTitle title={'Minha dispensa'} />
      <ProductList />
      <NavBar />
    </Container>
  );
}

export default MyPantry;
