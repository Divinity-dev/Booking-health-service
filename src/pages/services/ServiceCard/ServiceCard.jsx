import React from 'react';
import { Link } from 'react-router-dom';
import './service-card.css';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ServiceCard = ({ service }) => (
  <Link className="link" to={`/details/${service.id}`}>
    <div className="car-card d-flex flex-column p-5 position-relative">
      <img src={service.image_url} className="car-image d-flex flex-column" alt="img" />
      <div style={{ backgroundColor: '#afacac' }} className="back-for-cars" />
      <h2 style={{ margin: '3rem' }} className="car-name">{service.service_name}</h2>
      <h2 style={{ margin: '3rem' }} className="car-name">{service.doctor_name}</h2>
      <p style={{ color: 'rgb(182 183 184)' }}>{service.description}</p>
      <div className="cars-icons d-flex flex-row">
        <IconContext.Provider value={{ color: '#c3c0c0' }}>
          <FaIcons.FaTwitter />
          <FaIcons.FaFacebookF />
          <FaIcons.FaPinterestP />
        </IconContext.Provider>
      </div>
    </div>
  </Link>
);

ServiceCard.propTypes = ({
  service: PropTypes.object,
}).isRequired;

export default ServiceCard;
