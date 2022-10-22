import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { GlobalStyles } from './styles/GlobalStyle/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
