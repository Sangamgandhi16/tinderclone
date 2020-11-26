import React from "react";
import './App.css';
import TinderCards from "./TinderCards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    // BEM class naming convention
    <div className="app">

      <Header />
      <TinderCards />
      <SwipeButtons /> 
     
    </div>
  );
}

export default App;
