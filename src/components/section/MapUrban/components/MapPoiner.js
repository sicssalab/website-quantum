import React from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Map from "./Map";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../../constants/breakpointConstants";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../../store/StoreProvider";
import languageUtils from "../../../../utils/languageUtils";

const MapPoiner = (props) => {
  const { points, linkMore, textMore } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.LG });
  const {locale} = useGlobalState();
  const [selectValue, setSelectValue] = useState(-1)
  const [mapSelect, setMapSelect] = useState({});
  const onClickSelectMap = (e, index) => {
    setSelectValue(index);
    setMapSelect(points[index])
  };

  return (
    <div className="map-content">
      <div className="ul-content">
        <ListGroup defaultActiveKey={selectValue} horizontal={isMobile ? true : false}>
          {points &&
            points.map((mitem, i) => {
              return (
                <ListGroup.Item
                  key={i}
                  eventKey={i}
                  action
                  onClick={() => onClickSelectMap(mitem, i)}
                >
                  {mitem.name}
                </ListGroup.Item>
              );
            })}

        </ListGroup>
        {(linkMore && textMore && !isMobile) && (
          <Button as={Link} to={`${languageUtils.linksLocale(locale)}${linkMore}`} className="button-link" variant="link">
            <span>{textMore}</span>
            <i></i>
            </Button>
        )}
      </div>
      <Map item={mapSelect} />
    </div>
  );
};

export default MapPoiner;
