import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import * as RxIcons from 'react-icons/rx';
import ServiceCard from '../../pages/services/ServiceCard/ServiceCard';
import './carousel.css';

const ServiceCarousel = ({ services }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index < services.length - 3) {
      setIndex(index - 3);
    } else {
      setIndex(index - 3);
    }
  };

  const handleNext = () => {
    if (index < services.length - 3) {
      setIndex(index + 3);
    }
  };

  const isPrevDisabled = index === 0;
  const isNextDisabled = index === services.length;

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handlePrev}
          className="pagination-btn btn left"
          disabled={isPrevDisabled}
        >
          <RxIcons.RxTriangleLeft size="3em" />
        </button>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="w-100"
        controls={false}
        indicators
      >
        {services.map((service, i) => (
          <Carousel.Item key={service.id}>
            <div className="d-flex justify-content-around">
              {services.slice(i, i + 3).map((service) => (
                <ServiceCard key={services.id} service={service} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          onClick={handleNext}
          className="pagination-btn btn right"
          disabled={isNextDisabled}
        >
          <RxIcons.RxTriangleRight size="3em" />
        </button>
      </div>
    </>
  );
};
ServiceCarousel.propTypes = ({
  services: PropTypes.array,
}).isRequired;

export default ServiceCarousel;
