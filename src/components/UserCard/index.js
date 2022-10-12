import React, { useEffect, useState } from 'react';
import { CardContainer, DataContainer, InfoContainer, PhotoWraper } from './style';

function UserCard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('meuendpoint.com.br/usuario')
      .then(res => res.json())
      .then(res => setUser(res));
  }, []);

  return (
    <>
      <CardContainer>
        <PhotoWraper>
          <img src={user.imagem} />
        </PhotoWraper>
        <InfoContainer>
          <p>{user.nome}</p>
          <DataContainer>
            <p>35</p>
            <p>Idade</p>
          </DataContainer>
          <DataContainer>
            <p>25</p>
            <p>Alimentos</p>
          </DataContainer>
          <DataContainer>
            <p>0</p>
            <p>Desperdício</p>
          </DataContainer>
        </InfoContainer>
      </CardContainer>
    </>
  );
}

export default UserCard;
