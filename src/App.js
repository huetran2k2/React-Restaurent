import './App.css';
import React from 'react';
// import Content from './Component/Content';
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// // import Card from './Component/Restaurant/Item_card';
import Bill from './Component/Restaurant/Bill';


function App() {
  return (
    <div>
      {/* <Content></Content>
      <Link to="/Item_card"><i style={{position:'fixed', bottom: 50, right: 50, fontSize:"30px" }} className="fa-solid fa-cart-shopping"></i></Link>
      <Routes>
        <Route path="/Item_card" element={<Card />} />
      </Routes> */}
      <Bill></Bill>

      
    </div>
  );
}

export default App;
