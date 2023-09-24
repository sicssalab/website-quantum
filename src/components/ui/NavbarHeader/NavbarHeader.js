import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { ContainerCustom } from "../Containers";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, } from "react-router-dom";
import { useGlobalState } from "../../../store/StoreProvider";
import { GrClose } from "react-icons/gr"
import languageUtils from "../../../utils/languageUtils";

const NavbarHeader = (props) => {
  const { logo, menu } = props;
  const { locale } = useGlobalState();
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

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

  return (
    <>
      <Navbar>
        <ContainerCustom className="d-flex w-100">
          <Navbar.Brand as={Link} to={`${languageUtils.linksLocale(locale)}`}>
            <Image src={logo.src} alt={logo.alt} height={80} />
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
