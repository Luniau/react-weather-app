import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather defaultCity="Amsterdam" />

        <footer>
          This project was coded by <a href="https://precious-otter-6afb15.netlify.app/" target="_blank" rel="noreferrer">Luciana Carvalho</a>  and is
          <a href="https://github.com/Luniau/react-weather-app" target="_blank" rel="noreferrer"> open-sourced on github </a>
        </footer>
      </div>
    </div>
  );
}


