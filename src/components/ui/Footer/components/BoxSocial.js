import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FaceIcon from "../../../../assets/icons/facebook-white.svg";
import InstaIcon from "../../../../assets/icons/instagram-white.svg";
import LinkIcon from "../../../../assets/icons/linkein-white.svg";
import YoutubeIcon from "../../../../assets/icons/youtube-white.svg";

const BoxSocial = () => {
  return (
    <div className="content-social">
      <a href="https://www.facebook.com/QuantumAnalytical" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Facebook Quantum Analytical"}
          src={FaceIcon}
          height={20}
        />
      </a>
      <a href="https://www.instagram.com" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Instagram Quantum Analytical"}
          src={InstaIcon}
          height={20}
        />
      </a>
      <a href="https://www.linkedin.com" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Linkedin Quantum Analytical"}
          src={LinkIcon}
          height={20}
        />
      </a>
      <a href="https://www.youtube.com" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"YouTube Quantum Analytical"}
          src={YoutubeIcon}
          height={20}
        />
      </a>
    </div>
  );
};

export default BoxSocial;
