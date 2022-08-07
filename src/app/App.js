import React from "react";
import Login from "../pages/Session/Login";
import {Routes, Route} from "react-router-dom";
import NotFoundIndex from "../pages/Session/NotFoundIndex";
import FlexBoxLayout from "../pages/Layouts/FlexBox";

function App(event) {
  return (
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='event' element={<Login/>}/>
        <Route path='event' element={<FlexBoxLayout/>}/>
        <Route path='*' element={<NotFoundIndex/>}/>
      </Routes>
  );
}

export default App;
