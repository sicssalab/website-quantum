import React from "react";
import { useGlobalState } from "../../../store/StoreProvider";
import NavbarHeader from "../../ui/NavbarHeader/NavbarHeader";
import { ContainerCustom } from "../../ui/Containers";

const DocumentwithHeaderSection = (props) => {
    const { routesData } = useGlobalState();
    const { locales, description, title, imgNoInvert } = props;
    const { logo, menu: menuItems } = routesData.header;

    return (
        <div className="document-with-header">
            <header className="header-blog position-relative">
                <div className={`content-nav ${imgNoInvert ? "no-invert": ""}`}>
                    <NavbarHeader
                        logo={logo}
                        menu={menuItems}
                        locales={locales}
                    />
                </div>
            </header>
            <div className="flex-content">
                <ContainerCustom>
                    <div className="padding-documents-w">
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </ContainerCustom>
            </div>
        </div>
    );
}

export default DocumentwithHeaderSection;