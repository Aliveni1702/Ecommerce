import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main/main';
import Cart from './components/cart/cart';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
