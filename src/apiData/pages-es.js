import pagesContants from "../constants/pagesContants";
import Logo from "../assets/logo-white.png";

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
                url: pagesContants.servicesES
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
                name: "+52 99-83-18-57-32",
                url: "tel:+52 9983185732",
                type: "tel",
            },
            {
                name: "contacto@sicssalab.mx",
                url: "mailto:contacto@sicssalab.mx?body=Hola, soy: %0AMi número de WhatsApp es: %0AEstoy interesado en:",
                type: "email",
            },
        ],
        socialNetwork: [
            {
                alt: "red network",
                link: "https://www.facebook.com/sicssalab",
                type: "facebook"
            },
            {
                alt: "red network",
                link: "https://www.instagram.com/sicssalab/",
                type: "instagram"
            },
            {
                alt: "red network",
                link: "https://www.linkedin.com/company/sicssa-lab",
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
                name: "Servicios",
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