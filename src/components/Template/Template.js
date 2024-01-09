import React from "react";
import "./Template.scss";
import { Routes, Route } from "react-router-dom";
import NavBar from "../Element/NavBar/NavBar";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Payment/Payment";
import Other from "../Element/Other/Other";
function Template() {
  return (
    <div className='template_main_container'>
      <div className='nav_bar_container_temp'>
        <NavBar />
      </div>
      <div className='routes_container'>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/payments' element={<Payment />} />
          <Route exact path='*' element={<Other />} />
        </Routes>
      </div>
    </div>
  );
}

export default Template;
