import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import iconPhone from "../../../../assets/icons/phone-border.svg";
import iconMail from "../../../../assets/icons/mail-border.svg";

const UlContact = (props) => {
  const { title, items } = props;
  return (
    <div className="content-contact">
      {title && (<h5>{title}</h5>)}
      <ul>
        {items &&
          items.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.url}>
                  {item.type && (
                    <LazyLoadImage alt={item.name} fill="#005299" src={
                      item.type === "tel"
                      ? iconPhone
                      : iconMail
                    } />
                  )}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UlContact;
