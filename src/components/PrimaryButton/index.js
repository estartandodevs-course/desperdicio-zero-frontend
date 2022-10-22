import React from 'react';
import { Button } from './style';

function PrimaryButton(Props) {
  return (
    <Button>
      {Props.icon}
      <p>{Props.text}</p>
    </Button>
  );
}

export default PrimaryButton;
