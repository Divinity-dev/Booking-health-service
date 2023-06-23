import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Services from '../pages/services/Services';
// import AddCar from '../components/addCar/AddCar';

const AuthenticatedRoute = () => (
  <>
    <div className="main-container d-flex flex-row">
      <SideBar />
    </div>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Services />} />
      {/* <Route path="/add-car" element={hello} /> */}
    </Routes>
  </>
);
export default AuthenticatedRoute;
