import React from 'react';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
// import { ReactComponent as NomeIcon } from '../../assets/icons/nome-icon.svg';
// import { ReactComponent as DataDeValidadeIcon } from '../../assets/icons/data-de-validade-icon.svg';
import { Container } from '../../styles/PagesStyles/GlobalPageStyles';

function AddProduct() {
  // const inputs = [
  //   {
  //     name: 'Nome',
  //     icon: NomeIcon,
  //     type: 'text',
  //   },
  //   {
  //     name: 'Data de validade',
  //     icon: DataDeValidadeIcon,
  //     type: 'date',
  //   },
  // ];

  return (
    <Container>
      <Header />
      <PageTitle title={'Cadastro de alimentos'} />
      {/* {inputs.map((item, index) => {
        return <input type={item.type} placeholder={item.name} key={index} />;
      })} */}
      <NavBar />
    </Container>
  );
}

export default AddProduct;
