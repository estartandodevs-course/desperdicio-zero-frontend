import React, { useEffect, useState } from 'react';
import {
  AccordionContainer,
  ButtonsContainer,
  CardContainer,
  CardLeftWrapper,
  CardRightWrapper,
  DeleteButton,
  EditContainer,
  ProductDates,
  ProductName,
  SelectContainer,
  SelectName,
  SelectWrapper,
  UpdateButton,
} from './style';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { ReactComponent as FrutasIcon } from './../../assets/icons/fruta-icon.svg';
import { ReactComponent as CarnesIcon } from './../../assets/icons/carnes-icon.svg';
import { ReactComponent as BebidasIcon } from './../../assets/icons/bebidas-icon.svg';
import { ReactComponent as GraosIcon } from './../../assets/icons/graos-icon.svg';
import CategoriesList from '../CategoriesList';
import { GetAllProducts, GetProductsByCategory } from '../../services';

function ProductCard() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [indexActive, setIndexActive] = useState(null);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category !== null) {
      (async () => {
        if (category === 'todos-os-itens') {
          console.log('entrou no if');
          const data = await GetAllProducts();
          setProducts(data);
        } else {
          console.log('entrou no else');
          console.log(category);
          const data = await GetProductsByCategory(category);
          setProducts(data);
        }
      })();
    }
  }, [category]);

  if (!isFiltered) {
    console.log(isFiltered);
    return (
      <>
        <CategoriesList state={setCategory} fitleredState={setIsFiltered} />
      </>
    );
  }

  function GetIcon(category) {
    switch (category) {
      case 'frutas-e-verduras':
        return <FrutasIcon />;
      case 'carnes-e-frios':
        return <CarnesIcon />;
      case 'bebidas-e-outros-produtos':
        return <BebidasIcon />;
      case 'grãos,-cereais-e-farinhas':
        return <GraosIcon />;
      default:
        return <GraosIcon />;
    }
  }

  return products.map((item, index) => {
    return (
      <AccordionContainer key={index}>
        <CardContainer
          isActive={index === indexActive}
          onClick={() => (index === indexActive ? setIndexActive(null) : setIndexActive(index))}
        >
          <CardLeftWrapper>
            {GetIcon(item.categorias)}
            <p>
              {item.quantidade}
              {item['unidade-de-medida']}
            </p>
          </CardLeftWrapper>
          <CardRightWrapper>
            <ProductName>{item.nome}</ProductName>
            <ProductDates>
              <p>Adicionado em: 21/01/2022</p>
              <p>Validade: {item['data-de-validade']}</p>
              <p>Consumir até: {item['prazo-para-consumo']}</p>
            </ProductDates>
          </CardRightWrapper>
          {!(index === indexActive) ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </CardContainer>
        <EditContainer isActive={index === indexActive}>
          <SelectContainer>
            <SelectName>
              <p>Local: </p>
              <SelectWrapper>
                <option>&nbsp; {item.local}</option>
              </SelectWrapper>
            </SelectName>
            <SelectName>
              <p>Categoria: </p>
              <SelectWrapper>
                <option>&nbsp; {item.categorias.replaceAll('-', ' ')}</option>
              </SelectWrapper>
            </SelectName>
          </SelectContainer>
          <ButtonsContainer>
            <DeleteButton>Excluir</DeleteButton>
            <UpdateButton>Editar</UpdateButton>
          </ButtonsContainer>
        </EditContainer>
      </AccordionContainer>
    );
  });
}

function ProductList() {
  return (
    <>
      <ProductCard />
    </>
  );
}

export default ProductList;
