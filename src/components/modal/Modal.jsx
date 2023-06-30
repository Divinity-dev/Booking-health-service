import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getServices } from '../../redux/services/services';
import {
  addReservation,
  fetchReservations,
} from '../../redux/reservations/reservation';
import loader from '../../assets/loader2.gif';

const Modal = () => {
  const [serviceName, setServiceName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const servicesData = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');

  const services = servicesData.map((service) => ({
    id: service.id,
    service_name: service.service_name,
  }));

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const selectedService = services.find((service) => service.service_name === serviceName);
    const serviceId = selectedService ? selectedService.id : null;
    const data = {
      reservation_date: reservationDate,
      service_id: serviceId,
    };
    dispatch(addReservation(data)).then(() => {
      toast.info('Successfully made a reservation');
      dispatch(fetchReservations()).then(() => gohome());
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Fill the fieds below</h3>

      <label htmlFor="servieName">
        Service Name:
        <select
          id="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.service_name}>
              {service.service_name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="reservationDate">
        Reservation Date:
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
          required
        />
      </label>

      <button type="submit">
        {isLoading ? (
          <img src={loader} alt="loading" className="spinner" />
        ) : (
          'Book Reservation'
        )}
      </button>
    </form>
  );
};

Modal.propTypes = {
  selectedCity: PropTypes.string,
}.isRequired;

export default Modal;
