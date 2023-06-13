import React from "react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../../constants/breakpointConstants";
import QR from "../../../../assets/img/map/quintana-roo.png";
import { Image } from "react-bootstrap";
import CirceButton from "./CirceButton";
import CardMap from "./CardMap";
import imgMap from "../../../../assets/img/map/mexico.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
const Map = (props) => {
  const { item } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [showState, setShowState] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [viewCardSecond, setViewCardSecond] = useState({});

  const viewState = (view) => {
    if (view !== undefined && view !== null) {
      setShowState(true);
      setViewCard(false);
    } else {
      setShowState(false);
      setViewCard(true);
    }
    setViewCardSecond({});
  };

  const viewCardSecondLevel = (item, i) => {
    setViewCardSecond({
      index: i,
      ...item,
    });
  };

  useEffect(() => {
    setShowState(item.items ? true : false);
    setViewCard(false);
    setViewCardSecond({});
  }, [item]);

  //TODO cierra la seleccion del mapa con modal
  const onCloseCardSecond = () => {
    //cerrar el seleccionado
    setViewCardSecond({});
  }

  //TODO cierra la seleccion del mapa sin modal
  const onCloseCard = () => {
    //cerrar el seleccionado
    setShowState(false);
    setViewCard(false);
    setViewCardSecond({});
  }

  return (
    <div
      className={`map-inside`}
      style={{ width: isMobile ? 345 : 715, height: isMobile ? 300 : 484 }}
    >
      <div className={`map-inside-img ${item.items && 'active-blur'}`}>
      <LazyLoadImage
            src={imgMap}
            className='size-img'
            alt={item.name}
        />
      </div>
      {showState && (
        <div className={`map-modal active`}>
          <Image src={QR} style={{ height: isMobile ? 300 : '' }} />
          {item.items &&
            item.items.map((itemUp, index) => {
              return (
                <CirceButton
                  key={index}
                  className={`circle-btn-des ${viewCardSecond?.index >= 0
                    ? viewCardSecond.index === index
                      ? "active"
                      : ""
                    : ""
                    }`}
                  x={isMobile ? itemUp.coordXMobile : itemUp.coordX}
                  y={isMobile ? itemUp.coordYMobile : itemUp.coordY}
                  radius={15}
                  onClick={() => viewCardSecondLevel(itemUp, index)}
                />
              );
            })}
          {/* Card desk */}
          {(viewCardSecond && viewCardSecond?.index >= 0) && (
            <CardMap
              item={viewCardSecond.item}
              x={isMobile ? 35 : viewCardSecond.coordX}
              y={isMobile ? 72 : viewCardSecond.coordY - 190}
              hasClose={true}
              onClose={onCloseCardSecond}
            />
          )}
        </div>
      )}
      {item && item.coordX && item.coordY && (
        <CirceButton
          x={isMobile ? item.coordXMobile : item.coordX}
          y={isMobile ? item.coordYMobile : item.coordY}
          radius={15}
          fill="#feb263"
          onClick={() => viewState(item.viewState)}
        />
      )}
      {!showState && viewCard && item.item && (
        <CardMap
          item={item.item}
          hasClose={true}
          onClose={onCloseCard}
          x={isMobile ? 35 : item.coordX}
          y={isMobile ? 72 : item.coordY - 190}
        />
      )}
    </div>
  );
};

export default Map;
