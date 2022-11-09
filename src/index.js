import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Apropos from "./Pages/Apropos";
import Logements from "./Pages/logements";
import Error from "./Pages/Error";
import "./SASS/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/APropos" element={<Apropos />}></Route>
        <Route path="/logements/:logementsId" element={<Logements />}></Route>
        <Route path="/Error" element={<Error />}></Route>
        <Route path="/*" element={<Navigate to="/Error" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
