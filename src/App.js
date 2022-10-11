import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('meuendpoint.com.br/usuario')
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

  return <h1>Desperdício Zero</h1>;
}

export default App;
