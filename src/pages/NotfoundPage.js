import React from "react";
import { useIntl } from "react-intl";
import SectionLoadingPage from "./components/SectionLoadingPage";

const NotfoundPage = () => {
    const intl = useIntl();

    return (
        <SectionLoadingPage 
            title={intl.formatMessage({ id: "website.notfound-page" })}
        />
     );
}

export default NotfoundPage;