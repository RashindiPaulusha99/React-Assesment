import React from "react";
import Login from "../pages/Session/Login";
import Register from "../pages/Session/Register";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/Session/NotFoundIndex";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;
