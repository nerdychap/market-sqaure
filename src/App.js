import { Box } from '@chakra-ui/layout';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <Box height="100vh">
      <Header />
      <Products />
    </Box>

  );
}

export default App;
