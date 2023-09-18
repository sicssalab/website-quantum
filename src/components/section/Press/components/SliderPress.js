import React from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
//import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"; //TODO mas delgado
import CardPress from "../../../ui/cardPress";

const SliderPress = (props) => {
  const { autoPlay, items } = props;
  const slider = React.useRef(null);
  const PreArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        <BsChevronLeft />
      </Button>
    )
  }
  const NextArrows = (props) => {
    const { className, style, onClick } = props;

    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        <BsChevronRight />
      </Button>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    autoplay: autoPlay,
    speed: 1000,
    // arrows: true,
    variableWidth: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          variableWidth: false,
          prevArrow: <PreArrows />, //invirtio el scroll
          nextArrow: <NextArrows />, //invirtio el scroll
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2,
          variableWidth: true,
        }
      },
    ]
  };

  return (
    <>
      <div className="controls-slider-press">
        <Button onClick={() => slider?.current?.slickPrev()}><BsChevronLeft /></Button>
        <Button onClick={() => slider?.current?.slickNext()}><BsChevronRight /></Button>
      </div>
      <div className="slide-information-press slide-transparent-owner">
        {items && (
          <Slider ref={slider} {...settings}>
            {items.map((item, i) => (
              <CardPress key={i}
                {...item}
              />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

SliderPress.defaultProps = {
  autoPlay: false,
}

export default SliderPress;