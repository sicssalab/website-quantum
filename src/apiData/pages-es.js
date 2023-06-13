import pagesContants from "../constants/pagesContants";
import Logo from "../assets/img/Quantum-Analytical-Logo-home.jpg";

const resource = {
    locale: "es",
    data: [
        {
            shortName: "Inicio",
            slug: "/",
        },
        // {
        //     shortName: "Nuestros Proyectos",
        //     slug: pagesContants.proyectsES,
        // },
        // {
        //     shortName: "Selva escondida II",
        //     slug: pagesContants.landingSelvaEscondidaIIES,
        // },
        // {
        //     shortName: "Selva escondida",
        //     slug: pagesContants.landingSelvaEscondidaES,
        // },
        // {
        //     shortName: "Evia Interlomas",
        //     slug: pagesContants.landingEviaES,
        // },
        // {
        //     shortName: "Naay",
        //     slug: pagesContants.landingNaayES,
        // },
        // {
        //     shortName: "Palmas",
        //     slug: pagesContants.landingPalmasES,
        // },
        // {
        //     shortName: "Luum",
        //     slug: pagesContants.landingLuumES,
        // },
        // {
        //     shortName: "Kaana",
        //     slug: pagesContants.landingKaanaES,
        // },
        // {
        //     shortName: "Venecia",
        //     slug: pagesContants.landingVeneciaES,
        // },
        // {
        //     shortName: "Del Mar",
        //     slug: pagesContants.landingDelMarES,
        // },
        // {
        //     shortName: "Nosotros",
        //     slug: pagesContants.nosotrosES,
        // },
        // {
        //     shortName: "Contacto",
        //     slug: pagesContants.contactoES,
        // },
        // {
        //     shortName: "Términos y Condiciones",
        //     slug: pagesContants.terminosCondicionesES,
        // },
        // {
        //     shortName: "Aviso de Privacidad",
        //     slug: pagesContants.avisoPrivacidadES,
        // },
        // {
        //     shortName: "Blog",
        //     slug: pagesContants.blogES,
        // },
        // {
        //     shortName: "Blog Categorias",
        //     slug: pagesContants.blogCategoriasES,
        // },
        // {
        //     shortName: "Prensa",
        //     slug: pagesContants.prensaES,
        // },
    ],
    header: {
        logo: {
            src: Logo,
            alt: "quantumdo",
        },
        menu: [
            {
                name: "inicio",
                url: "/"
            },
            {
                name: "productos",
                url: "/"
            },
            {
                name: "renta equipos",
                url: "/"
            },
            {
                name: "servicios",
                url: "/"
            },
            {
                name: "novedades",
                url: "/"
            },
            {
                name: "contacto",
                url: "/"
            },
        ]
    },
    footer: {
        logo: {
            src: Logo,
            alt: "quantumdo",
        },
        itemsContact: [
            {
                name: "+52 (99) 9999 9999",
                url: "tel:+52 (99) 9999 9999",
                type: "tel",
            },
            {
                name: "info@quantumdo.com",
                url: "mailto:info@quantumdo.com?body=Hola, soy: %0AMi número de WhatsApp es: %0AEstoy interesado en:",
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
                link: "https://www.instagram.com",
                type: "instagram"
            },
            {
                alt: "red network",
                link: "https://www.linkedin.com",
                type: "linkedin"
            },
            {
                alt: "red network",
                link: "https://www.youtube.com",
                type: "youtube"
            },
        ],
        itemsAboutUs: [
            {
                name: "Productos",
                url: "",
                order: 1,
                orderMobile: 1,
            },
            {
                name: "Renta de equipos",
                url: "",
                order: 5,
                orderMobile: 2,
            },
            {
                name: "Servicios",
                url: "",
                order: 4,
                orderMobile: 3,
            },
            {
                name: "Aviso  de Privacidad",
                url: "",
                order: 3,
                orderMobile: 4,
            },
            {
                name: "Novedades",
                url: "",
                order: 7,
                orderMobile: 5,
            },
            {
                name: "Términos y Condiciones",
                url: "",
                order: 6,
                orderMobile: 6,
            },
            {
                name: "Contacto",
                url: "",
                order: 2,
                orderMobile: 7,
            },
        ]
    },
}

export default resource;