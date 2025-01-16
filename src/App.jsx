import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "./routes/Routes"
import "./App.css";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


// WRGBFY4LCRGFVBJHR4FBGVWKUYRGYFWV4URGUWYRFGYUREFC