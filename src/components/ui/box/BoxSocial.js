import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FaceIcon from "../../../assets/icons/facebook-white.svg";
import TwitterIcon from "../../../assets/icons/twitter.svg";
import InstaIcon from "../../../assets/icons/instagram-white.svg";
import LinkIcon from "../../../assets/icons/linkein-white.svg";
import YoutubeIcon from "../../../assets/icons/youtube-white.svg";
import TiktokIcon from "../../../assets/icons/tiktok.svg";

const BoxSocial = (props) => {
  const {items} = props;

  const getIcon = (type) => {
    let component = null;
    switch (type) {
      case "youtube":
        component = YoutubeIcon;
        break;
      case "instagram":
        component = InstaIcon;
        break;
      case "linkedin":
        component = LinkIcon;
        break;
      case "facebook":
        component = FaceIcon;
        break;
      case "twitter":
        component = TwitterIcon;
        break;
      case "tyktok":
        component = TiktokIcon;
        break;
      default:
    }
    return component;
  }

  return ( items &&
    <div className="content-social">
      {items.map((item, i) => {
        return <a key={i} href={item.link} target={"_blank"} rel="noreferrer">
          <LazyLoadImage
            alt={item.alt}
            src={getIcon(item.type)}
            height={20}
          />
        </a>
      })}
    </div>
  );
};

export default BoxSocial;
