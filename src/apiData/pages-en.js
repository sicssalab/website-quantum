import pagesContants from "../constants/pagesContants";
import Logo from "../assets/img/Quantum-Analytical-Logo-home.jpg";
const resource = {
    locale: "en",
    data: [
        {
            shortName: "home",
            slug: "/",
        },
        // {
        //     shortName: "ourner proyects",
        //     slug: pagesContants.proyectsEN,
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
        //     shortName: "Del Mar",
        //     slug: pagesContants.landingDelMarES,
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
        //     shortName: "Ourner",
        //     slug: pagesContants.nosotrosEN,
        // },
        // {
        //     shortName: "Contact",
        //     slug: pagesContants.contactoEN,
        // },
        // {
        //     shortName: "Términos y Condiciones",
        //     slug: pagesContants.terminosCondicionesEN,
        // },
        // {
        //     shortName: "Aviso de Privacidad",
        //     slug: pagesContants.avisoPrivacidadEN,
        // },
        // {
        //     shortName: "Blog",
        //     slug: pagesContants.blogES,
        // },
        // {
        //     shortName: "Blog Preview",
        //     slug: `${pagesContants.blogES}/blog-test`,
        // },
        // {
        //     shortName: "Blog Categorias",
        //     slug: pagesContants.blogCategoriasEN,
        // },
        // {
        //     shortName: "Press",
        //     slug: pagesContants.prensaEN,
        // },
    ],
    header: {
        logo: {
            src: Logo,
            alt: "quantumdo",
        },
        menu: [
            {
                name: "home",
                url: "/"
            },
            {
                name: "products",
                url: "/"
            },
            {
                name: "equipment rental",
                url: "/"
            },
            {
                name: "services",
                url: "/"
            },
            {
                name: "news",
                url: "/"
            },
            {
                name: "contact",
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
        itemsAboutUs: [
            {
                name: "Products",
                url: "",
                order: 1,
                orderMobile: 1,
            },
            {
                name: "equipment rental",
                url: "",
                order: 5,
                orderMobile: 2,
            },
            {
                name: "Services",
                url: "",
                order: 4,
                orderMobile: 3,
            },
            {
                name: "Notice of Privacy",
                url: "",
                order: 3,
                orderMobile: 4,
            },
            {
                name: "News",
                url: "",
                order: 7,
                orderMobile: 5,
            },
            {
                name: "Terms and Conditions",
                url: "",
                order: 6,
                orderMobile: 6,
            },
            {
                name: "Contact",
                url: "",
                order: 2,
                orderMobile: 7,
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
    }
}

export default resource;