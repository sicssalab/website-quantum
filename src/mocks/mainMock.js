import Logo from "../assets/miraro_blanco-01.svg"
import pagesContants from "../constants/pagesContants";

const mainMock = {
        logo: {
            src: Logo,
            alt: "Sicssa lab",
            link: "/"
        },
        menu: [
            {
                name: "inicio",
                url: "/"
            },
            {
                name: "nosotros",
                url: pagesContants.nosotrosES
            },
            {
                name: "proyectos",
                url: pagesContants.proyectsES
            },
            {
                name: "prensa",
                url: pagesContants.prensaES
            },
            {
                name: "contacto",
                url: pagesContants.contactoES
            },
            {
                name: "blog",
                url: pagesContants.blogES
            },
        ]
}

export default mainMock;