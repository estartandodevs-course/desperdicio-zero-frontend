import React from 'react';
import { TitleContainer } from './style';

function PageTitle(props) {
  return (
    <TitleContainer>
      <p>{props.title}</p>
    </TitleContainer>
  );
}

export default PageTitle;
