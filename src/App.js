import "./App.css";
import React from "react";
// import Content from './Component/Content';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "./Component/Restaurant/Item_card";
import Header from "./Component/Restaurant/Header";
import Footer from "./Component/Restaurant/Footer";
import List from "./Component/Restaurant/Menu";
import Bill from "./Component/Restaurant/Bill";

function App() {
  return (
    <div>
      <List></List>
    </div>
  );
}

export default App;
