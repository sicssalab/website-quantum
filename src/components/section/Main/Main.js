import React from "react";
import { useEffect } from "react";
import SlickSlider from "../../ui/SlickSlider/SlickSlider";
import BoxSocial from "../../ui/box/BoxSocial";
import NavbarHeader from "../../ui/NavbarHeader/NavbarHeader";
import AOS from 'aos';
import { ContainerCustom } from "../../ui/Containers";
import { useGlobalState } from "../../../store/StoreProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Main = (props) => {
  const { items, locales, title, description, isLanding, socialNetwork, isHome, imageFit = "cover" } = props;
  const {routesData} = useGlobalState();
  const { logo, menu: menuItems } = routesData.header;
  let styleContent = {};
  if(isHome) {
    styleContent = {
      left: 0,
      right: 0,
      margin: "auto",
      maxWidth: 1600,
    }
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header className="header position-relative">
      <div className="content-nav">
        <NavbarHeader
          logo={logo}
          menu={menuItems}
          locales={locales}
          isHome={isHome}
        />
      </div>
      <div className={`content-slide ${isLanding ? "content-landing" : 'content-slide-not-landing'}`}>
        <SlickSlider
          items={items}
          arrows={false}
          autoPlay={true}
          dots={false}
          styleImg={{objectFit: imageFit}}
        />
      </div>
      {/* <div className={`content-degraded ${isLanding ? "content-width": ''}`}></div> */}
      <ContainerCustom>
        <div className={`content-information ${isLanding ? "content-center": ''}`} style={styleContent}>
          {isHome && (
            <div className="mb-5">
            <LazyLoadImage className="m-auto d-block" src={"/public2/logo.jpeg"} alt="Logo" />
            </div>
          )}
          <div data-aos="fade-up" data-aos-duration="3000">
            {title && (<h1 dangerouslySetInnerHTML={{__html: title}} />)}
            {description && (<p className="description"  dangerouslySetInnerHTML={{__html: description}} />)}
          </div>
        </div>
        <BoxSocial items={socialNetwork} />

      </ContainerCustom>
    </header>
  );
};
Main.defaultProps = {
  isLanding: false,
}
export default Main;
