import pagesContants from "../constants/pagesContants";
import logo from "../assets/logo.jpg";

const resource = {
    locale: "es",
    data: [],
    header: {
        logo: {
            src: logo,
            alt: "Quantum",
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
            src: logo,
            alt: "Quantum",
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
                link: "https://www.linkedin.com/company/quantum-do-analytical",
                type: "linkedin"
            },
            // {
            //     alt: "red network",
            //     link: "https://www.youtube.com/@sicssalab",
            //     type: "youtube"
            // },
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