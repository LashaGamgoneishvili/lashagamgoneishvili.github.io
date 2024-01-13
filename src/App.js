import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import About from "./components/about";
import Lasha from "./about-components/lasha";
import Mirza from "./about-components/mirza";
import Janvredi from "./about-components/janvredi";
import Kniaz from "./about-components/kniaz";
import Tornike from "./about-components/tornike";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/lasha" element={<Lasha />}></Route>
        <Route path="/mirza" element={<Mirza />}></Route>
        <Route path="/janverdi" element={<Janvredi />}></Route>
        <Route path="/kniaz" element={<Kniaz />}></Route>
        <Route path="/tornike" element={<Tornike />}></Route>
      </Routes>
    </>
  );
}
