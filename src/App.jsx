import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart';
import Footer from "./components/Footer";
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App;