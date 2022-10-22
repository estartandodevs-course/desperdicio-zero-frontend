import React from 'react';
import { Button } from './style';

function PrimaryButton(icon, text) {
  return (
    <Button>
      {icon}
      <p>{text}</p>
    </Button>
  );
}

export default PrimaryButton;
