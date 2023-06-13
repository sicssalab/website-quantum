import React from "react";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../../../constants/breakpointConstants";
import { Link } from "react-router-dom";
import languageUtils from "../../../../../utils/languageUtils";
import { useGlobalState } from "../../../../../store/StoreProvider";

const ContainerImg = (props) => {
  const { item } = props;
  const {locale} = useGlobalState();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });

  const RenderImg = () => {
    return (
      <>
      <Image
        src={
          item.imageMobile
            ? isMobile
              ? item.imageMobile
              : item.image
            : item.image
        }
        height={761}
      />
      <div className="content">
        <div>
          <h4 className="text-uppercase">{item.name}</h4>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </>
    )
  }

  return (
    <>
      {item.link && (
        <Link className="container-develop d-block" to={`${languageUtils.linksLocale(locale)}${item.link}`}>
          <RenderImg />
        </Link>
      )}
      {!item.link && (
        <div className="container-develop">
          <RenderImg />
        </div>
      )}
    </>
    // <div className="container-develop">
    //   <LazyLoadImage
    //     src={
    //       item.imageMobile
    //         ? isMobile
    //           ? item.imageMobile
    //           : item.image
    //         : item.image
    //     }
    //     height={761}
    //   />
    //   <div className="content">
    //     <div>
    //       <h4 className="text-uppercase">{item.name}</h4>
    //       <p className="description">{item.description}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContainerImg;
