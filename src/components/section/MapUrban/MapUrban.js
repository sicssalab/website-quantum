import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import MapPoiner from "./components/MapPoiner";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";

const MapUrban = (props) => {
  const { title, description, items, linkMore, textMore } = props;
  const isMobile = useMediaQuery( { maxWidth: breakpointConstants.MD });
  const styleFloats = {
    position: "absolute",
    right: isMobile ? 40 : "70px",
    top: 0,
    width: "82px",
    height: "82px"
  };
  return (<div className="map-urban-container">
    <ContainerCustom>
      {isMobile && <FloatBoxs sx={styleFloats} />}
      <div>
        {title && <h2 dangerouslySetInnerHTML={{__html: title}} />}
        {description && <p className="description" dangerouslySetInnerHTML={{__html: description}} />}
      </div>
      <MapPoiner points={items} linkMore={linkMore} textMore={textMore} />
    </ContainerCustom>
  </div>);
}

export default MapUrban;