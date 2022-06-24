import './App.css';
import React from 'react';
// import Content from './Component/Content';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from './Component/Restaurant/Item_card';
import Header from './Component/Restaurant/Header';
import Footer from './Component/Restaurant/Footer';
import List from './Component/Restaurant/Menu';


function App() {
  return (
    <div>
      <Header></Header>
      <List></List>
      <Footer/>
      {/* <Card></Card> */}
      {/* <Content></Content> */}
      <Link to="/Item_card"><i style={{position:'fixed', bottom: 50, right: 50, fontSize:"30px" }} className="fa-solid fa-cart-shopping"></i></Link>
      <Routes>
        <Route path="/Item_card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
