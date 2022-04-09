import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <h1>Welcome</h1>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
      </Routes>      
    </div>
  );
}

export default App;