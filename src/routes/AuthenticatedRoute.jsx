import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import Services from '../pages/services/Services';
import Navbar from '../components/navbar/MobNavbar';
import AddService from '../components/addService/AddService';
import UserReservationTable from '../components/userReservationTable/UserReservationTable';
import RemoveService from '../components/deleteService/deleteService';
import DetailsPage from '../components/detailsPage/DetailsPage';

const AuthenticatedRoute = () => (
  <>
    <Navbar />
    <SideBar />
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Services />} />
      <Route path="/add-service" element={<AddService />} />
      <Route path="/delete-service" element={<RemoveService />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/myreservations" element={<UserReservationTable />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
