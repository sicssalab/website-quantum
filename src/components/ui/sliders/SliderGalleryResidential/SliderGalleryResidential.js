import React from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import ContainerImg from "./components/ContainerImg";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
//import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"; //TODO mas delgado

const SliderGalleryResidential = (props) => {
    const {autoPlay, items, arrows} = props;

    const PreArrows = (props) => {
      const { className,  style, onClick } = props;
      return (
        <Button className={className} onClick={onClick} style={{...style}}>
          <BsChevronLeft />
        </Button>
      )
    }
    const NextArrows = (props) => {
      const { className,  style, onClick } = props;

      return (
        <Button className={className} onClick={onClick} style={{...style}}>
          <BsChevronRight />
        </Button>
      )
    }
    const settings = {
        dots: false,
        infinite: false,
        autoplay: autoPlay,
        speed: 1000,
        arrows: arrows,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreArrows />,
        nextArrow: <NextArrows />,
        // responsive:[
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         //arrows: false,
        //         centerMode: false,
        //         centerPadding: '0',
        //         slidesToShow: 1,
        //         variableWidth: true,
        //       }
        //     },
        //   ]
      };

    return (
        <div className="slide-gallery-residential">
      {items && (
        <Slider {...settings}>
          {items.map((imagen, i) => (
              <ContainerImg item={imagen} key={i} position={i} />
          ))}
        </Slider>
      )}
    </div>
     );
}
 
SliderGalleryResidential.defaultProps = {
    autoPlay: false,
    arrows: true,
}

export default SliderGalleryResidential;