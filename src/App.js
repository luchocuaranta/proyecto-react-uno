
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {  CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito";
import Signout from "./components/Signout";




function App() {

  

  return (
    <div className="App">

      <CartProvider>

        <BrowserRouter>

          <NavBar />

          <Routes>

            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Error Clothing!" />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/signout" element={<Signout />} />

          </Routes>

        </BrowserRouter>

      </CartProvider>

      

    </div >
  );
}

export default App;
