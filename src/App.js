import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Checkout />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
