import React from "react";
import Button from "react-bootstrap/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CardPress = (props) => {
  const {
    classCardPress,
    alt,
    logo,
    description,
    link,
    textLink,
    hasExternalLink,
  } = props;

  const RenderContent = () => {
    return (
      <>
        {alt && logo && (
          <div className="container-logo">
            {/* <Image alt={alt} src={logo} className="size-logo" /> */}
            <LazyLoadImage
              className="size-logo"
              src={logo}
              //width={600} height={400}
              alt={alt}
              // onError={({ currentTarget }) => {
              // currentTarget.onerror = null;
              // currentTarget.src = imageDefault;
              // }}
            />
          </div>
        )}
        <div>
          {description && (
            <div className="container-description">
              <p>{description}</p>
            </div>
          )}
          <div className="container-link text-center">
            <span>{textLink}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {hasExternalLink && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="card-press"
          style={{ ...classCardPress }}
        >
          <RenderContent />
        </a>
      )}
      {!hasExternalLink && (
        <Button
          as={Link}
          to={link}
          target="_blank"
          rel="noreferrer"
          className="card-press"
          style={{ ...classCardPress }}
        >
          <RenderContent />
        </Button>
      )}
    </>
  );
};

// CardPress.defaultProps = {
//     color: "backgroundSegundary.main",
//     colorSecondary: "backgroundPrimary.main",
//     numbers: 13
// }
export default CardPress;
