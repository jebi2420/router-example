import { useState } from 'react';
// Navigate는 리다이렉트하게 도와주는 컴포넌트
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {
  // authenticate값이 false면 로그인 안 한거, true면 한 걸로 가정
  const [authenticate, setAuthenticate] = useState(false)
  // 컴포넌트
  const PrivateRoute = () => {
    return authenticate === true?<UserPage />:<Navigate to="/login" />
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
