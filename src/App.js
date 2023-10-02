import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";




function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Error Clothing!"/>} />
        <Route path="/category/:category" element={<ItemListContainer />}/>
        <Route path="/item/:productId" element={<ItemDetailContainer />}/>
        

      </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
