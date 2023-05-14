import Home from "./components/Home";
import React from "react";
import DataProvider from "./context/DataProvider";


function App() {
  return (

   <DataProvider>
       <Home/>
   </DataProvider>

  );
}

export default App;
