import React from "react";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import { useGlobalState } from "../../../../store/StoreProvider";
import { Link } from "react-router-dom";
import languageUtils from "../../../../utils/languageUtils";

const CardMap = (props) => {
  const { x, y, item, hasClose } = props;
  const { locale } = useGlobalState();
  const onClose = () => {
    const { onClose } = props;
    onClose && onClose();
  }

  return (
    <div
      className="card-map"
      style={{
        // position: "absolute",
        // left: x,
        // top: y,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        margin: "auto",
        //top: 0,
      }}
    >
      {hasClose && <CloseButton onClick={onClose} style={{ position: "absolute", right: "5px", top: "5px" }} />}
      <Image className="image-destin" alt={item.name} src={item.image} height={400} />
      <div className="body">
        <Image className="image-logo" alt={item.name}
          src={item.logo}
          width="220"
        />
        {item.address && <span className="destination" dangerouslySetInnerHTML={{__html: item.address}} />}
        <div className="content-actions">
        <Button as={Link} to={`${languageUtils.linksLocale(locale)}${item.link}`} className="button-link" variant="link">{item.textButton}</Button>
        </div>
      </div>
    </div>
  );
};

export default CardMap;
