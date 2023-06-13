import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const MenuList = (props) => {
  const { title, items, id, value } = props;
  const handbleLanguage = (value) => {
    const { onSelect } = props;
    onSelect && onSelect(value);
  };

  return (
    <NavDropdown
      title={title}
      className="text-uppercase"
      onSelect={handbleLanguage}
      id={id}
      drop={"down"}

    >
      {items &&
        items.map((item) => {
          return (
            <NavDropdown.Item
              eventKey={item.value}
              key={item.value}
              disabled={item.value === value ? true : false}
              active={item.value === value ? true : false}
            >
              {item.name}
            </NavDropdown.Item>
          );
        })}
    </NavDropdown>
  );
};
MenuList.defaultPros = {
    id: "basic-nav-dropdown"
}
export default MenuList;
