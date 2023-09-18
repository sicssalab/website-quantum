import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import MenuList from "./components/MenuList";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from 'react-bootstrap/ListGroup';
import { ContainerCustom } from "../Containers";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useGlobalState } from "../../../store/StoreProvider";
import { GrClose } from "react-icons/gr"
import { Button } from "react-bootstrap";
import localeAction from "../../../actions/localeAction";
import languageUtils from "../../../utils/languageUtils";
const NavbarHeader = (props) => {
  const { logo, menu, locales } = props;
  const { locale, pageData } = useGlobalState();
  const [showMenu, setShowMenu] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };
  const handbleLanguage = (value) => {
    if (pageData.localizations) {
      const newLocale = pageData.localizations.find(item => item.locale === value);
      //TODO recuperar el link por idioma
      if (newLocale) {
        //TODO cambiar el lenguaje nuevo
        //TODO actualiza el local del sitio
        localeAction.updateLocale(value, dispatch);
        const newLink = languageUtils.getPathForRouteLinkLocale(value, newLocale.slug);
        const location = {
            pathname: newLink,
            //search: `?${new URLSearchParams(query).toString()}`,
          };
        navigate(location);
      }
    }
  }

  const renderMenuWrap = () => {
    const render = (
      <ListGroup>
        {menu && menu.map((mitem, i) => {
          return <ListGroup.Item key={i}
            action
            as={Link} to={`${languageUtils.linksLocale(locale)}${(mitem.url === "/" || mitem.url === "inicio" || mitem.url === "home") ? '' : mitem.url}`} onClick={onClickMenu}
          >
            {mitem.name}
          </ListGroup.Item>
        })}
      </ListGroup>
    );

    return render;
  };

  //TODO solo para 1 select regresa un array
  const resultViewLocal = locales.filter(item => item.value.toLowerCase() !== locale.toLowerCase());

  return (
    <>
      <Navbar>
        <ContainerCustom className="d-flex w-100">
          <Navbar.Brand as={Link} to={`${languageUtils.linksLocale(locale)}`}>
            <Image src={logo.src} alt={logo.alt} height={46} />
          </Navbar.Brand>
          <div className="justify-content-end align-items-center d-flex w-100">
            <HiMenuAlt3 className="d-block ms-3 n-menu" onClick={onClickMenu} />
          </div>
        </ContainerCustom>
      </Navbar>
      <div className="menu-wrap-anim">
        <div className={`menu-wrap-anim-menu ${showMenu ? 'active' : ''}`}>
          <span className="btn-close-x" onClick={onClickMenu}>
            <GrClose />
          </span>
          <div>
            <hr className="border-middle" />
            <div>
              {renderMenuWrap()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
