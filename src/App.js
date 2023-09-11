import React from "react";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";



function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Error Clothing!" />
      </div>
    </div>
  );
}

export default App;
