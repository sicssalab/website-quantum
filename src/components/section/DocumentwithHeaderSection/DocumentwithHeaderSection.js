import React from "react";
import { useGlobalState } from "../../../store/StoreProvider";
import NavbarHeader from "../../ui/NavbarHeader/NavbarHeader";
import { ContainerCustom } from "../../ui/Containers";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import FloatInverse from "../../ui/boxFloat/FloatInverse";

const DocumentwithHeaderSection = (props) => {
    const { routesData } = useGlobalState();
    const { locales, description, title } = props;
    const { logo, menu: menuItems } = routesData.header;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })
    const styleFloats = {
        position: "absolute",
        left: 0,
        top: isMobile ? 0 : -6,
        width: "78px",
        height: "84px",
        transform: "rotate(90deg)"
    };

    return (
        <div className="document-with-header">
            <header className="header-blog position-relative">
                <div className="content-nav">
                    <NavbarHeader
                        logo={logo}
                        menu={menuItems}
                        locales={locales}
                    />
                </div>
            </header>
            <div className="flex-content">
                <FloatBoxs sx={styleFloats} />
                <ContainerCustom>
                    <div className="padding-documents-w">
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </ContainerCustom>
                <FloatInverse sx={{
                    width: "90px",
                    height: "90px",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    transform: "rotate(90deg)"
                }} />
            </div>
        </div>
    );
}

export default DocumentwithHeaderSection;