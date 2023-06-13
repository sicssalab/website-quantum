import React from "react";
import { useEffect } from "react";
import SlickSlider from "../../ui/SlickSlider/SlickSlider";
import NavbarHeader from "../../ui/NavbarHeader/NavbarHeader";
import AOS from 'aos';
import { ContainerCustom } from "../../ui/Containers";
import { useGlobalState } from "../../../store/StoreProvider";
const MainBlog = (props) => {
  const { items, locales, title, description } = props;
  const {routesData} = useGlobalState();
  const { logo, menu: menuItems } = routesData.header;

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header className="header-blog position-relative">
      <div className="content-nav">
        <NavbarHeader
          logo={logo}
          menu={menuItems}
          locales={locales}
        />
      </div>
      <div className={`content-slide`}>
        <SlickSlider
          items={items}
          arrows={false}
          autoPlay={true}
          dots={false}
        />
      </div>
      <ContainerCustom>
        <div className={`content-information`}>
          <div data-aos="fade-up" data-aos-duration="3000">
            {title && (<h1 dangerouslySetInnerHTML={{__html: title}} />)}
            {description && (<p className="description"  dangerouslySetInnerHTML={{__html: description}} />)}
          </div>
        </div>
      </ContainerCustom>
    </header>
  );
};
MainBlog.defaultProps = {
  isLanding: false,
}
export default MainBlog;
