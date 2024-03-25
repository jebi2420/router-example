import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
