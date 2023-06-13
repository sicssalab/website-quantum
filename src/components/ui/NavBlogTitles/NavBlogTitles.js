import React from "react";
import { Container, Row, Col, Nav, Image, Navbar } from "react-bootstrap";
import languageUtils from "../../../utils/languageUtils";
import { useGlobalState } from "../../../store/StoreProvider";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";

const NavBlogTitles = (props) => {
  const { items, isLink, selectValue } = props;
  const { locale, pageData } = useGlobalState();

  const onClick = (item) => {
    const { onClick } = props;
    onClick && onClick(item);
  };

  return (
    <div className="container-navbar-blog-categories">
      <Nav
        activeKey={selectValue}
        onSelect={onClick}
      >
        {items &&
          items.map((item, index) => {
            return isLink ? (
              <Nav.Link key={index} as={Link} to={`${languageUtils.linksLocale(locale)}${pageData.slug}/${pageData.slugSub}?category=${item.tag}`} className="title-link">
                {item.name}
              </Nav.Link>
            ) : (
                <Nav.Link
                  key={index}
                eventKey={item.tag}
                >{item.name}</Nav.Link>
            );
          })}
      </Nav>
    </div>
  );
};

export default NavBlogTitles;
