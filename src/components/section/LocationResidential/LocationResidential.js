
import React from "react";
const LocationResidential = (props) => {
    const { gmap, location } = props;


    return (
        <div className="location-residential-container">
            <div className="location-residential">
                <div className="div-row">
                    <div className="container-location">
                        {location && (
                            <>
                                <div className="container-location-interno">
                                    {location.title && <h2 dangerouslySetInnerHTML={{ __html: location.title }} />}
                                    {location.description && <p className="description" dangerouslySetInnerHTML={{ __html: location.description }} />}
                                </div>
                            </>
                        )}
                    </div>
                    <div className="container-map">
                        {gmap && <div dangerouslySetInnerHTML={{ __html: gmap }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationResidential;