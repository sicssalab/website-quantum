import React from "react";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../../../constants/breakpointConstants";
import { Image } from "react-bootstrap";

const ContainerImg = (props) => {
  const { item } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  return (
    <div className="container-develop">
      <Image
        src={item.imageMobile
          ? isMobile
            ? item.imageMobile
            : item.image
          : item.image}
        height={534}
      />
    </div>
  );
};

export default ContainerImg;
