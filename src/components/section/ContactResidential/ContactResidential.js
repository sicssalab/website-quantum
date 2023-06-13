import React from "react";
import useCreateFormHbspt from "../../../hooks/useCreateFormHbspt";
const ContactResidential = (props) => {
    const { gmap, contact, hbsptSettings } = props;
    useCreateFormHbspt(hbsptSettings);

    return (
        <div className="contact-residential-container">
            <div className="contact-residential">
                <div className="div-row">
                    <div className="container-map">
                        {gmap && <div dangerouslySetInnerHTML={{ __html: gmap }} />}
                    </div>
                    <div className="container-form">
                        {contact && (
                            <>
                                {(contact.title || contact.description) && <div>
                                    {contact.title && <h2 dangerouslySetInnerHTML={{ __html: contact.title }} />}
                                    {contact.description && <p className="description" dangerouslySetInnerHTML={{ __html: contact.description }} />}
                                </div>}
                                {hbsptSettings && (
                                    <div id={`${hbsptSettings.target.replace('#', '')}`} className="id_form_contact_us"></div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactResidential;