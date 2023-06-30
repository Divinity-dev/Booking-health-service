/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServices } from '../../redux/services/services';
import './services.css';
import ServiceCarousel from '../../components/carousel/ServiceCarousel';

const Services = () => {
  const [currentUser, setCurrentUser] = useState('');
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
    setCurrentUser(localStorage.getItem('current_user'));
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 overflow-hidden">
      <h4 className="user-name">{`Welcome, ${currentUser}`}</h4>
      <h2 className="cars-section-title">Latest Service</h2>
      <p style={{ color: 'rgb(182 183 184)' }} className="mb-0">Please select a service here</p>
      <div className="d-flex flex-row cars-container position-relative justify-content-around">
        <ServiceCarousel services={services} />
      </div>
    </div>
  );
};

export default Services;
