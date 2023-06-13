import React from "react";
import Slider from "react-slick";
import imageDefault from "../../../logo.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";

const SlickSlider = (props) => {
  const { autoPlay, infinite, speed, arrows, items, dots
  } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const settings = {
    dots: dots,
    infinite: infinite,
    autoplay: autoPlay,
    speed: speed,
    arrows: arrows,
    slidesToShow: 1,
    slidesToScroll: 1,
    //cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    cssEase: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
    //cssEase: 'ease-out',
    //cssEase: 'ease-in-out',
    lazyLoad: "progressive",
    rtl: true,
  };

  return (
    <>
      {items && (
        <Slider {...settings}>
          {items.map((imagen, i) => (
            <div className="content-img" key={i}>
              {i === 0 && <Image
                src={
                  imagen.urlMobile
                    ? isMobile
                      ? imagen.urlMobile
                      : imagen.url
                    : imagen.url
                }
                //width={600} height={400}
                alt={imagen.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = imageDefault;
                }}
              />}
              {i !== 0 && <LazyLoadImage
                src={
                  imagen.urlMobile
                    ? isMobile
                      ? imagen.urlMobile
                      : imagen.url
                    : imagen.url
                }
                //width={600} height={400}
                alt={imagen.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = imageDefault;
                }}
              />}
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};
SlickSlider.defaultProps = {
  infinite: true,
  autoplay: false,
  dots: true,
  speed: 1000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default SlickSlider;
