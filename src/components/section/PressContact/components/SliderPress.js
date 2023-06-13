import React from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
//import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"; //TODO mas delgado
import CardPress from "../../../ui/cardPress";
import ArrowNext from "../../../../assets/icons/arrow-right-bold-white.svg"
import ArrowBack from "../../../../assets/icons/arrow-left-bold-white.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderPress = (props) => {
  const { autoPlay, items } = props;
  const slider = React.useRef(null);
  const PreArrows = (props) => {
    const { className, style, onClick } = props;
    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        {/* <BsChevronLeft /> */}
        <LazyLoadImage
          src={ArrowBack}
          alt={"button back slide"}
        />
      </Button>
    )
  }
  const NextArrows = (props) => {
    const { className, style, onClick } = props;

    return (
      <Button className={className} onClick={onClick} style={{ ...style }}>
        {/* <BsChevronRight /> */}
        <LazyLoadImage
          src={ArrowNext}
          alt={"button nexy slide"}
        />
      </Button>
    )
  }
  const settings = {
    dots: false,
    infinite: false,
    autoplay: autoPlay,
    speed: 1000,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PreArrows />,
    nextArrow: <NextArrows />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          //centerMode: true,
          //centerPadding: '0',
          slidesToShow: 1,
          //variableWidth: false,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          //variableWidth: true,
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 2,
          //variableWidth: true,
        }
      },
    ]
  };

  return (
    <div className="slide-information-press-contact">
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
  );
}

SliderPress.defaultProps = {
  autoPlay: false,
}

export default SliderPress;