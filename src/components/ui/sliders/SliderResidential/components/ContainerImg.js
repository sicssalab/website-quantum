import React from "react";
import { useMediaQuery } from "react-responsive";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import breakpointConstants from "../../../../../constants/breakpointConstants";
import { useGlobalState } from "../../../../../store/StoreProvider";
import languageUtils from "../../../../../utils/languageUtils";

const ContainerImg = (props) => {
  const { item } = props;
  const {locale} = useGlobalState();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  return (
    <Link className="container-develop" to={`${languageUtils.linksLocale(locale)}${item.link}`}>
      <Image
        src={item.imageMobile
          ? isMobile
            ? item.imageMobile
            : item.image
          : item.image}
        height={534}
      />
      <div className="content">
        <div>
          <h4 className="text-uppercase">{item.name}</h4>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContainerImg;
