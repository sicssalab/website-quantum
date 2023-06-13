import React from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useGlobalState } from "../../../store/StoreProvider";
import languageUtils from "../../../utils/languageUtils";

const CardOurProyects = (props) => {
    const { item } = props;
    const { locale } = useGlobalState();
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })

    return (
        <Button as={Link} to={item.link ? `${languageUtils.linksLocale(locale)}${item.link}` : '#'} className="card-own-proyects" disabled={item.link ? false : true}>
            {(item.image && item.alt) && (
                <LazyLoadImage
                    className="size-img"
                    src={
                        item.imageMobile
                            ? isMobile
                                ? item.imageMobile
                                : item.image
                            : item.image}
                    alt={item.alt} />
            )}
            {item.subTitle && <h5 className="subtitle">{item.subTitle}</h5>}
            < div className='container-opacity-text'>
                {item.title && <h3>{item.title}</h3>}
                {item.address && <p>{item.address}</p>}
            </div >
        </Button>
    );
}

// CardPress.defaultProps = {
//     color: "backgroundSegundary.main",
//     colorSecondary: "backgroundPrimary.main",
//     numbers: 13
// }
export default CardOurProyects;