import { Header } from 'components';
import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CharacterDetailsPage } from './pages';

function App() {
  return (
    <div className="app">
      <Header />
      <Container className="container">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterDetailsPage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
