import './App.css';
import 'bulma/css/bulma.min.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './Pages/Contacto';
import {CartProvider } from './components/Context/CartContext';

import './components/ItemDetail/ItemDetail.css'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';





function App() {



  return (

    <div className="App">
          <CartProvider>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
          <Route path='/' element={<ItemListContainer titulo={'PRODUCTOS'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer titulo={'Detalle del producto'}/>}/>
              <Route path='contacto' element={<Contacto/> }/>
              <Route path='/cart' element={<Cart/> }/>
              <Route path='/checkout' element={<Checkout/> }/>
          </Routes>
        </main>
        <footer>
             <p>
              Kaylestore ©
            </p>
        </footer>
      </BrowserRouter>   
      </CartProvider>
    </div>
  );
}

export default App;