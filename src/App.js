import React from "react";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Error Clothing!" />
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
