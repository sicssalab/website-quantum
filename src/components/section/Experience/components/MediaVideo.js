import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../../constants/breakpointConstants";
import PlayVideo from "../../../../assets/icons/icon-play.svg"
import { useEffect, useState } from "react";

const MediaVideo = (props) => {
    const { frontPageMobile, frontPage, altImage, videoLink } = props
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })
    const [viewIframe, setViewIframe] = useState(true);

    const onClickRenderIframe = () => {
        setViewIframe(!viewIframe)
    }

    useEffect(() => {
        setViewIframe(true)
    },[frontPageMobile, frontPage, videoLink]);

    return (
        <div className="video-container">
            {!viewIframe && (
                <>
                    <LazyLoadImage
                        src={isMobile ? frontPageMobile : frontPage}
                        className='size-img'
                        //width={600} height={400}
                        alt={altImage}
                    />
                    <div className="btn-click-play" onClick={onClickRenderIframe}>
                        <LazyLoadImage
                            src={PlayVideo}
                            alt={"play"}
                        />
                    </div>
                </>
            )}
            {viewIframe && (
                <iframe width="900" height="450"
                    src={`https://www.youtube.com/embed/${videoLink}`}
                    title={altImage}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    )
}
export default MediaVideo;