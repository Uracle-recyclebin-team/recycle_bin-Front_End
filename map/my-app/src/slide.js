import React from 'react';
import Slider from 'react-slick';
import './building.css';

const PrevButton = ({ onClick }) => (
    <button className="prevBtn" onClick={onClick}>
      <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-left-40.png" alt="PrevBtnImg" />
    </button>
  );

const NextButton = ({ onClick }) => (
  <button className="nextBtn" onClick={onClick}>
    <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-right-40.png" alt="NextBtnImg" />
  </button>
);

const Slide = () => {
  const appendArrows = (container, prevButton, nextButton) => (
    <div className="arrowContainer">
      {prevButton}
      {nextButton}
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    appendArrows: appendArrows
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default Slide;