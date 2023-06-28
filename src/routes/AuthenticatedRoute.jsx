import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Services from '../pages/services/Services';
import Navbar from '../components/navbar/MobNavbar';
// import AddService from '../components/addService/AddService';

const AuthenticatedRoute = () => (
  <>
    <Navbar />
    <SideBar />
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Services />} />
      {/* <Route path="/add-service" element={<AddService />} /> */}
    </Routes>
  </>
);
export default AuthenticatedRoute;
