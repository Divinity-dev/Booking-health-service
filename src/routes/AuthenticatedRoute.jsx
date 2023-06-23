import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Services from '../pages/services/Services';
// import AddService from '../components/addService/AddService';

const AuthenticatedRoute = () => (
  <>
    <div className="main-container d-flex flex-row">
      <SideBar />
    </div>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Services />} />
      {/* <Route path="/add-service" element={<AddService />} /> */}
    </Routes>
  </>
);
export default AuthenticatedRoute;
