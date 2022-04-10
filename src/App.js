import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import style from './App.module.scss';
import Stadium from "./pages/Stadium/Stadium";

function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Stadium />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>      
    </div>
  );
}

export default App;