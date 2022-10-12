import React, { useEffect, useState } from 'react';
import { CounterContainer } from './style';
import { BsArrowDownCircle } from 'react-icons/bs';

function WasteCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch('meuendpoint.com.br/valordesperdicado')
      .then(res => res.json())
      .then(res => setCounter(res.valor));
  }, []);

  return (
    <CounterContainer>
      <p>Seu desperdício até agora foi de</p>
      <BsArrowDownCircle size={40} />
      <p>R$ {counter}</p>
    </CounterContainer>
  );
}

export default WasteCounter;
