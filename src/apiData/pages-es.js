import pagesContants from "../constants/pagesContants";
import Logo from "../assets/logo.jpg";

const resource = {
    locale: "es",
    data: [
        {
            shortName: "Inicio",
            slug: "/",
        },
        {
            shortName: "Nuestros Proyectos",
            slug: pagesContants.proyectsES,
        },
        {
            shortName: "Del Mar",
            slug: pagesContants.landingSelvaEscondidaIIES,
        },
        // {
        //     shortName: "Del Mar",
        //     slug: pagesContants.landingDelMarES,
        // },
        {
            shortName: "Nosotros",
            slug: pagesContants.nosotrosES,
        },
        {
            shortName: "Contacto",
            slug: pagesContants.contactoES,
        },
        {
            shortName: "Términos y Condiciones",
            slug: pagesContants.terminosCondicionesES,
        },
        {
            shortName: "Aviso de Privacidad",
            slug: pagesContants.avisoPrivacidadES,
        },
        {
            shortName: "Proyectos",
            slug: pagesContants.servicesES,
        },
        // {
        //     shortName: "Cotización",
        //     slug: pagesContants.cotizaES,
        // },
        // {
        //     shortName: "Prensa",
        //     slug: pagesContants.prensaES,
        // },
        // {
        //     shortName: "blog",
        //     slug: pagesContants.blogES,
        // },
        // {
        //     shortName: "Blog Categorias",
        //     slug: pagesContants.blogCategoriasES,
        // },
    ],
    header: {
        logo: {
            src: Logo,
            alt: "Sicssa lab",
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
                name: "Productos",
                url: pagesContants.proyectsES
            },
            {
                name: "contacto",
                url: pagesContants.contactoES
            },
        ]
    },
    footer: {
        logo: {
            src: Logo,
            alt: "Sicssa lab",
        },
        itemsContact: [
            {
                name: "(55) 5768 5508",
                url: "tel:+55 5768 5508",
                type: "tel",
            },
            {
                name: "mercadotecnia5@quantumdo.com",
                url: "mailto:mercadotecnia5@quantumdo.com",
                type: "email",
            },
        ],
        socialNetwork: [
            {
                alt: "red network",
                link: "https://www.facebook.com/QuantumAnalytical",
                type: "facebook"
            },
            {
                alt: "red network",
                link: "https://www.instagram.com/sicssalab/",
                type: "instagram"
            },
            {
                alt: "red network",
                link: "https://www.linkedin.com/company/quantum-do-analytical",
                type: "linkedin"
            },
            {
                alt: "red network",
                link: "https://www.youtube.com/@sicssalab",
                type: "youtube"
            },
        ],
        itemsAboutUs: [
            {
                name: "Nosotros",
                url: pagesContants.nosotrosES,
                order: 1,
                orderMobile: 1,
            },
            {
                name: "Productos",
                url: pagesContants.proyectsES,
                order: 4,
                orderMobile: 4,
            },
            {
                name: "Aviso  de Privacidad",
                url: pagesContants.avisoPrivacidadES,
                order: 3,
                orderMobile: 3,
            },
            {
                name: "Términos y Condiciones",
                url: pagesContants.terminosCondicionesES,
                order: 2,
                orderMobile: 2,
            },
            {
                name: "Contacto",
                url: pagesContants.contactoES,
                order: 6,
                orderMobile: 6,
            },
        ]
    },
}

export default resource;