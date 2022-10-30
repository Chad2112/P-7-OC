import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Apropos from "./Pages/Apropos";
import Error from "./Components/Error";
import Logements from "./Pages/logements";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./SASS/main.css";

WebFont.load({
  google: {
    families: ["Montserrat", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// let welcome = React.createElement("h1", { style: { color: "red" } }, `Welcome to react world`);

// root.render(welcome, document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/APropos" element={<Apropos />}></Route>
        <Route path="/logements/:logementsId" element={<Logements />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
