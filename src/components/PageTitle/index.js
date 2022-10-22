import React from 'react';
import { TitleContainer } from './style';

function PageTitle(Props) {
  return (
    <TitleContainer>
      <p>{Props.title}</p>
    </TitleContainer>
  );
}

export default PageTitle;
