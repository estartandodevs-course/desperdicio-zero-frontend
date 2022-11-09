import React from 'react';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import { Container } from '../../styles/PagesStyles/GlobalPageStyles';
import FoodForm from '../../components/FoodForm';
import NomeIcon from '../../assets/icons/nome-icon.svg';
import DataDeValidadeIcon from '../../assets/icons/data-de-validade-icon.svg';

function AddProduct() {
  const inputs = [
    {
      name: 'Nome',
      type: 'text',
      icon: NomeIcon,
    },
    {
      name: 'Data de validade',
      type: 'date',
      icon: DataDeValidadeIcon,
    },
    {
      name: 'Prazo para consumo',
      type: 'date',
      icon: NomeIcon,
    },
    {
      name: 'Local',
      type: 'select',
      icon: NomeIcon,
      options: ['Geladeira', 'Freezer', 'Armário'],
    },
    {
      name: 'Preço',
      type: 'number',
      icon: DataDeValidadeIcon,
    },
    {
      name: 'Unidade de medida',
      type: 'select',
      icon: NomeIcon,
      options: ['mm', 'g', 'kg', 'ml', 'l', 'und', 'lb', 'oz', 'gal', 'qt', 'fl. oz'],
    },
    {
      name: 'Categorias',
      type: 'select',
      icon: NomeIcon,
      options: [
        'Frutas e verduras',
        'Carnes e frios',
        'Bebidas e outros produtos',
        'Grão, cereais e farinhas',
        'Outros',
      ],
    },
  ];

  return (
    <Container>
      <Header />
      <PageTitle title={'Cadastro de alimentos'} />
      <FoodForm inputs={inputs} />
      <NavBar />
    </Container>
  );
}

export default AddProduct;
