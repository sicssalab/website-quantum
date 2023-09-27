import React from "react";
import { useEffect } from "react";
import SlickSlider from "../../ui/SlickSlider/SlickSlider";
import BoxSocial from "../../ui/box/BoxSocial";
import NavbarHeader from "../../ui/NavbarHeader/NavbarHeader";
import AOS from 'aos';
import { ContainerCustom } from "../../ui/Containers";
import { useGlobalState } from "../../../store/StoreProvider";
const Main = (props) => {
  const { items, locales, title, description, isLanding, socialNetwork } = props;
  const {routesData} = useGlobalState();
  const { logo, menu: menuItems } = routesData.header;

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
        />
      </div>
      <div className={`content-slide ${isLanding ? "content-landing" : 'content-slide-not-landing'}`}>
        <SlickSlider
          items={items}
          arrows={false}
          autoPlay={true}
          dots={false}
        />
      </div>
      {/* <div className={`content-degraded ${isLanding ? "content-width": ''}`}></div> */}
      <ContainerCustom>
        <div className={`content-information ${isLanding ? "content-center": ''}`}>
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
