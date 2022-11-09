import React, { useState } from 'react';
import {
  Counter,
  CounterButton,
  CounterContainer,
  DateInputWrapper,
  FormContainer,
  FormWrapper,
  Icon,
  InputContainer,
  InputWrapper,
  SelectWrapper,
} from './style';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';
import PrimaryButton from '../PrimaryButton';
import { AddProduct } from '../../services/index';
import ProductModal from './../ProductModal/index';

function FormInput(props) {
  return (
    <InputContainer>
      <InputWrapper type={props.type} placeholder={props.placeholder} name={props.name} />
      {console.log('ICON form::', props.icon)}
      <Icon src={props.icon} />
    </InputContainer>
  );
}

function FormDateInput(props) {
  return (
    <InputContainer>
      <DateInputWrapper
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onFocus={e => (e.target.type = 'date')}
      />
      <Icon src={props.icon} />
    </InputContainer>
  );
}

function FormSelect(props) {
  return (
    <InputContainer>
      <SelectWrapper name={props.name}>
        <option disabled={true} selected="selected">
          {props.placeholder}
        </option>
        {props.options?.map((option, index) => {
          return (
            <option key={index} value={option.replaceAll(' ', '-').toLowerCase()}>
              {option}
            </option>
          );
        })}
      </SelectWrapper>
      <Icon src={props.icon} />
    </InputContainer>
  );
}

function FoodForm({ inputs }) {
  const [productsCounter, setProductsCounter] = useState(0);
  const [isSent, setIsSent] = useState(false);

  const HandleSubmit = async event => {
    event.preventDefault();

    try {
      const data = {
        nome: event.target.elements.nome?.value,
        'data-de-validade': event.target.elements['data-de-validade']?.value,
        'prazo-para-consumo': event.target.elements['prazo-para-consumo']?.value,
        local: event.target.elements.local?.value,
        preço: event.target.elements.preço?.value,
        'unidade-de-medida': event.target.elements['unidade-de-medida']?.value,
        categorias: event.target.elements.categorias?.value,
        quantidade: event.target.elements.quantidade?.value,
      };

      if (AddProduct(data)) {
        setIsSent(true);
      }
    } catch (err) {
      alert('Erro: ' + err);
    }
  };

  function FormItemsHandle(items) {
    return items.map((item, index) => {
      if (item.type === 'text' || item.type === 'number') {
        return (
          <FormInput
            key={index}
            type={item.type}
            name={NamesHandle(item.name)}
            placeholder={item.name}
            icon={item.icon}
          />
        );
      } else if (item.type === 'select') {
        return (
          <FormSelect
            key={index}
            placeholder={item.name}
            name={NamesHandle(item.name)}
            options={item.options}
            icon={item.icon}
          />
        );
      } else if (item.type === 'date') {
        return (
          <FormDateInput
            key={index}
            type={item.type}
            name={NamesHandle(item.name)}
            placeholder={item.name}
            icon={item.icon}
          />
        );
      }
    });
  }

  function NamesHandle(name) {
    return name.replaceAll(' ', '-').toLowerCase();
  }

  if (!isSent) {
    return (
      <FormContainer>
        <FormWrapper onSubmit={HandleSubmit}>
          {FormItemsHandle(inputs)}
          <CounterContainer>
            <CounterButton onClick={() => (productsCounter > 0 ? setProductsCounter(productsCounter - 1) : null)}>
              <AiOutlineMinus />
            </CounterButton>
            <Counter type="number" value={productsCounter} name="quantidade" readOnly={true} />
            <CounterButton onClick={() => setProductsCounter(productsCounter + 1)}>
              <AiOutlinePlus />
            </CounterButton>
          </CounterContainer>
          <PrimaryButton type="submit" icon={<MdAddCircleOutline size={34} />} text="Adicionar item" />
        </FormWrapper>
      </FormContainer>
    );
  } else {
    return <ProductModal state={setIsSent} />;
  }
}

export default FoodForm;
