import React from "react";
import { useEffect } from "react";
import ContactResidential from "../components/section/ContactResidential/ContactResidential";
import LocationResidential from "../components/section/LocationResidential/LocationResidential";
import Experience from "../components/section/Experience";
import GalleryResidential from "../components/section/GalleryResidential/GalleryResidential";
import InformationResidential from "../components/section/InformationResidential";
import Main from "../components/section/Main";
import MapUrban from "../components/section/MapUrban/MapUrban";
import OthersProtectsResidential from "../components/section/OthersProtectsResidential";
import OwnProyects from "../components/section/OwnProyects";
import Press from "../components/section/Press";
import Proyects from "../components/section/Proyects";
import Footer from "../components/ui/Footer/Footer";
import { useGlobalState } from "../store/StoreProvider";
import useCallPages from "../hooks/useCallPages";
import HeaderSEO from "../components/ui/HeaderSEO";
import MainBlog from "../components/section/MainBlog/MainBlog";
import ContactBlog from "../components/section/ContactBlog/ContactBlog";
import BodyBlog from "../components/section/BodyBlog/BodyBlog";
import BodyBlogCategory from "../components/section/BodyBlogCategory/BodyBlogCategory";
import PressContact from "../components/section/PressContact/PressContact";
import DocumentwithHeaderSection from "../components/section/DocumentwithHeaderSection/DocumentwithHeaderSection";
import MisionVisionSection from "../components/section/MisionVisionSection/MisionVisionSection";
import StyleLifeContactSection from "../components/section/StyleLifeContactSection/StyleLifeContactSection";
import PressList from "../components/section/PressList/PressList";

const SlugPage = (props) => {
    const { locales } = props;
    const { pageData, routesData } = useGlobalState();
    useCallPages();

    const selectComponentPage = (item, position) => {
        //TODO identificamos a X pagina y decimos como pintarla
        //TODO dinamic-page ejemplo de header y footer desde el componentePage y no desde el layout
        const { type, ...rest } = item;

        switch (type) {
            case "header-component":
                return (<Main key={position}
                    locales={locales}
                    {...rest}
                />);
            case "header-blog-component":
                return (<MainBlog key={position}
                    locales={locales}
                    {...rest}
                />);
            case "experience-component":
                return (<Experience key={position}
                    {...rest}
                />);
            case "proyects-component":
                return (<Proyects key={position}
                    {...rest}
                />);
            case "map-urban-component":
                return (<MapUrban key={position}
                    {...rest}
                />);
            case "press-component":
                return (<Press key={position}
                    {...rest}
                />);
            case "press-contact":
                return (<PressContact key={position}
                    {...rest}
                />);
            case "press-list":
                return (<PressList key={position}
                    {...rest}
                />);
            case "own-proyects-component":
                return (<OwnProyects key={position}
                    {...rest}
                />);
            case "information-residential-component":
                return (<InformationResidential key={position}
                    {...rest}
                />);
            case "gallery-residential-component":
                return (<GalleryResidential key={position}
                    {...rest}
                />);
            case "others-proyects-component":
                return (<OthersProtectsResidential key={position}
                    {...rest}
                />);
            case "contact-map-component":
                return (<ContactResidential key={position}
                    {...rest}
                />);
            case "contact-blog-component":
                return (<ContactBlog key={position}
                    {...rest}
                />);
            case "blog-home-catogories-component":
                return (<BodyBlog key={position}
                    {...rest}
                />);
            case "blog-categories-body-component":
                return (<BodyBlogCategory key={position}
                    {...rest}
                />);
            case "style-lige-contact-component":
                return (<StyleLifeContactSection key={position}
                    {...rest}
                />);
            case "mission-vision-body-component":
                return (<MisionVisionSection key={position}
                    {...rest}
                />);
            case "location-map-component":
                return (<LocationResidential key={position}
                    {...rest}
                />);
            case "document-header-component":
                return (<DocumentwithHeaderSection key={position}
                    locales={locales}
                    {...rest}
                />);
            // case "footer-component":
            //     return (<Footer key={position}
            //         {...rest}
            //     />);
            default:
                return <div key={position}></div>
        }
    };

    return (
        <>
            {pageData.isFetching && (
                <p className="text-black">Loading...</p>
            )}
            {pageData.isError && (
                <p className="text-black">Ups! we have a problem</p>
            )}
            {pageData.isSuccess && (
                <>
                    <HeaderSEO />
                    {pageData.items && pageData.items.map((item, i) => selectComponentPage(item, i))}
                    <Footer
                    {...routesData.footer}
                />
                </>
            )}
        </>
    );
}

export default SlugPage;