import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createService } from '../../redux/service/service';
import './addservice.css';
import loader from '../../assets/loader2.gif';

const AddService = () => {
  const [serviceData, setServiceData] = useState({
    service_name: '',
    description: '',
    price: '',
    image: null,
    service_date: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const gohome = () => navigate('/');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!serviceData.image) {
      toast.error('Please select an image for the service');
      setIsLoading(false);
      return;
    }
    const data = new FormData();
    data.append('service[service_name]', serviceData.service_name);
    data.append('service[description]', serviceData.description);
    data.append('service[price]', serviceData.price);
    data.append('service[image]', serviceData.image);
    data.append('service[doctor_name]', serviceData.doctor_name);
    data.append('service[service_date]', serviceData.service_date);

    dispatch(createService(data)).then(() => {
      gohome();
      toast.info('Created Service Successfully');
      setIsLoading(false);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setServiceData((prevCarData) => ({
      ...prevCarData,
      image: file,
    }));
  };

  const handleInputChange = (event) => {
    setServiceData({ ...serviceData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form
        className="add-car-form"
        onSubmit={handleSubmit}
      >
        <h2 className="title">
          Add A New Service
        </h2>
        <div className="w-full">
          <input
            type="text"
            name="service_name"
            placeholder="Enter Service name"
            value={serviceData.service_name}
            onChange={handleInputChange}
            autoComplete="off"
            className="form-control w-full"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            value={serviceData.description}
            name="description"
            onChange={handleInputChange}
            className="w-full form-control"
            placeholder="Description"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            value={serviceData.doctor_name}
            placeholder="Doctor Name"
            name="doctor_name"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            value={serviceData.price}
            placeholder="Price"
            name="price"
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Add an Image</span>
          <input
            type="file"
            name="image"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={handleImageChange}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Year</span>
          <input
            type="date"
            value={serviceData.service_date}
            name="service_date"
            onChange={handleInputChange}
            className="form-control"
            required
          />

        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3"
        >
          {isLoading ? <img src={loader} alt="loading" className="spinner" /> : 'Add Service'}
        </button>
      </form>
    </div>
  );
};
export default AddService;
