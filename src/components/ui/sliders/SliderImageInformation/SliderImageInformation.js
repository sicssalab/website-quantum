import React from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
import ContainerImg from "./components/ContainerImg";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
//import {TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"; //TODO mas delgado
const SliderImageInformation = (props) => {
    const {autoPlay, items, arrows} = props;

    const PreArrows = (props) => {
      const { className,  style, onClick } = props;
      return (
        <Button className={className} onClick={onClick} style={{...style}}>
          <BsChevronLeft fill="#005299" />
        </Button>
      )
    }
    const NextArrows = (props) => {
      const { className,  style, onClick } = props;

      return (
        <Button className={className} onClick={onClick} style={{...style}}>
          <BsChevronRight fill="#005299" />
        </Button>
      )
    }
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        arrows: arrows,
        variableWidth: true,
        centerPadding: '10px',
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: <PreArrows />,
        nextArrow: <NextArrows />,
        responsive:[
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                //centerPadding: '0',
                slidesToShow: 1,
                variableWidth: true,
              }
            },
          ]
      };

    return (
        <div className="slide-information-develop">
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
 
SliderImageInformation.defaultProps = {
    autoPlay: false,
    arrows: true,
}

export default SliderImageInformation;