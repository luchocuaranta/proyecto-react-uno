import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContext } from "./context/CartContext";




function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      

      <CartContext.Provider value={ {carrito, setCarrito} }>

        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Error Clothing!" />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />


          </Routes>

        </BrowserRouter>
      </CartContext.Provider>

      

    </div >
  );
}

export default App;
