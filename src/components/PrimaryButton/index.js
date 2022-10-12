import React from 'react';
import { Button } from './style';

function PrimaryButton(props) {
  return (
    <Button>
      {props.icon}
      <p>{props.text}</p>
    </Button>
  );
}

export default PrimaryButton;
