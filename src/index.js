import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Logements from "./Pages/logements";
import UseFetch from "./Utils/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./SASS/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/APropos" element={<Home />}></Route>
        <Route path="/Logement/:id" element={<Logements />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
