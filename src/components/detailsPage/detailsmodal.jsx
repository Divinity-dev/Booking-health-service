import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import {
  addReservation,
  fetchReservations,
} from '../../redux/reservations/reservation';
import loader from '../../assets/loader2.gif';

const Modal = ({ selectedService, setIsModalOpen }) => {
  const [reservationDate, setReservationDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gohome = () => navigate('/myreservations');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = selectedService ? selectedService.id : null;

    const data = {
      reservation_date: reservationDate,
      service_id: serviceId,
    };
    dispatch(addReservation(data)).then(() => {
      toast.info('Successfully made a reservation');
      dispatch(fetchReservations()).then(() => gohome());
      setIsLoading(false);
      setIsModalOpen(false);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <h3>Fill the fields below</h3>

      <label htmlFor="carName" className="d-flex flex-column">
        Service Name:
        <select id="serviceName">
          <option key={selectedService.id} value={selectedService.service_name}>
            {selectedService.service_name}
          </option>
        </select>
      </label>

      <label htmlFor="reservationDate">
        Reservation Date:
        <input
          type="date"
          required
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
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
