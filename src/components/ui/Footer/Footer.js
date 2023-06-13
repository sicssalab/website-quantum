import React from "react";
import { ContainerCustom } from "../Containers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BoxSocial from "./components/BoxSocial";
import BoxDeveloper from "./components/BoxDeveloper";
import UlContact from "./components/UlContact";
import UlOther from "./components/UlOther";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../store/StoreProvider";
import languageUtils from "../../../utils/languageUtils";
const Footer = (props) => {
  const { logo, itemsContact, itemsAboutUs } = props;
  const {locale} = useGlobalState();
  return (
    <footer className="footer">
      <ContainerCustom>
        <div className="boxs grid-info">
          <div className="content-logo">
            <Link to={`${languageUtils.linksLocale(locale)}`}>
              <LazyLoadImage
                alt={logo.alt}
                src={logo.src}
                //width={600}
                height={57}
              />
            </Link>
          </div>
          <UlContact items={itemsContact} />
          <UlOther items={itemsAboutUs} className="content-two" />
        </div>
        <div className="boxs">
          <BoxDeveloper />
          <BoxSocial />
        </div>
      </ContainerCustom>
    </footer>
  );
};

export default Footer;
