import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllServices, deleteService } from '../../redux/deleteService/deleteService';
import trashcan from '../../assets/trash.gif';
import './deleteService.css';
import loaders from '../../assets/loader2.gif';

const RemoveService = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  const { services, loading, error } = useSelector((state) => state.delete);

  const handledelete = (serviceId) => {
    dispatch(deleteService(serviceId)).then(() => {
      toast.info('Deleted Service Successfully');
    });
  };

  const deleteservice = (id) => {
    handledelete(id);
  };

  if (loading) {
    return (
      <div className="center"><img className="loading-cars" src={loaders} alt="loading" /></div>);
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="d-flex w-full del-container">
      <ol className="list-group list-group-numbered del-list">
        <div className="d-flex w-full del-header">
          <h2>
            Delete A Service
          </h2>
          <img src={trashcan} alt="trash" className="trash" />
        </div>
        {services.map((service) => (
          <li key={service.id} className="list-group-item d-flex justify-content-between align-items-start">
            <span className="images">
              {' '}
              <img src={service.image_url} alt="img" className="del-car-image d-flex flex-column" />
            </span>
            <span className="cars">{service.service_name}</span>
            <span className="del">
              <button
                type="button"
                onClick={() => deleteservice(service.id)}
              >
                delete
              </button>
            </span>
          </li>

        ))}
      </ol>
    </div>
  );
};

export default RemoveService;
