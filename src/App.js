import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
