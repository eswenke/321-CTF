import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Level1 from "./pages/Level1.js";
import Level2 from "./pages/Level2.js";
import Level3 from "./pages/Level3.js";
import Bob from "./pages/Bob.js";
import Alice from "./pages/Alice.js";

function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level1/bob" element={<Bob />} />
        <Route path="/level1/alice" element={<Alice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyApp;
