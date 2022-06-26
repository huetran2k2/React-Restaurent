import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Component/Restaurant/Item_card";
import List from "./Component/Restaurant/Menu";
import Bill from "./Component/Restaurant/Bill";
import Layout from "./Component/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<List />} /> */}
        <Route path="/Menu" element={<List />} />
        {/* <Route path="/Bill" element={<Bill />} /> */}
        <Route path="/Item_card" element={<Card />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
