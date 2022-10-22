import React from 'react';
import { TitleContainer } from './style';
import PropTypes from 'prop-types';

function PageTitle(title) {
  return (
    <TitleContainer>
      <p>{title}</p>
    </TitleContainer>
  );
}

PageTitle.PropTypes = {
  title: PropTypes.string,
};

export default PageTitle;
