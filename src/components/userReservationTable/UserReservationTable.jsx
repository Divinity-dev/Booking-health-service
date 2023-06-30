import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './userReservationTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  fetchReservations,
  deleteReservation,
} from '../../redux/reservations/reservation';
import { getServices } from '../../redux/services/services';
import date from '../../assets/date.png';
import car from '../../assets/car.png';
import del from '../../assets/del.png';
import loader from '../../assets/loader2.gif';
import loaders from '../../assets/health_loader.webp';

const UserReservationTable = () => {
  const servicesData = useSelector((state) => state.services);
  const { reservations, loading, error } = useSelector(
    (state) => state.reservations,
  );
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const services = servicesData.map((service) => ({
    id: service.id,
    service_name: service.service_name,
  }));

  useEffect(() => {
    dispatch(getServices());
    dispatch(fetchReservations());
  }, []);

  const handleCancelClick = (id) => {
    setIsLoading(true);
    dispatch(deleteReservation(id)).then(() => {
      toast.info('Reservation deleted');
      dispatch(fetchReservations());
      setIsLoading(false);
    });
  };

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="center">
        <img className="loading-services" src={loaders} alt="loading" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tablecont">
      {reservations.length === 0 && <div className="no-reservations">No reservations added yet</div>}
      {reservations.length > 0 && (
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>
                Service
                {' '}
                <img src={car} alt="date" className="table-img" />
              </th>
              <th>
                Date
                {' '}
                <img src={date} alt="date" className="table-img" />
              </th>
              <th>
                Delete
                {' '}
                <img src={del} alt="delete" className="table-img" />
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => {
              const service = services.find((service) => service.id === reservation.service_id);
              const serviceName = service ? service.service_name : 'Unknown Service';
              return (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{serviceName}</td>
                  <td>{reservation.reservation_date}</td>
                  <td>
                    <Button
                      className="table-btn"
                      variant="danger"
                      onClick={() => handleCancelClick(reservation.id)}
                    >
                      {isLoading ? (
                        <img src={loader} alt="loading" className="spinner" />
                      ) : (
                        'Cancel Reservation'
                      )}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserReservationTable;
