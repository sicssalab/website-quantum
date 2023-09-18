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
                name: "home",
                url: "/"
            },
            {
                name: "ourner",
                url: pagesContants.nosotrosEN
            },
            {
                name: "proyects",
                url: pagesContants.proyectsEN
            },
            {
                name: "press",
                url: pagesContants.prensaEN
            },
            {
                name: "contact",
                url: pagesContants.contactoEN
            },
            {
                name: "blog",
                url: pagesContants.blogES
            },
        ]
}

export default mainMock;