import pagesContants from "../constants/pagesContants";

const apiResponseMock = {
    items: [
        {
            type: "header-component",
            title: "DEL MAR BEACHFRONT CONDOS",
            isLanding: true,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/selvaescondidamx",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/selvaescondidamx",
                    type: "instagram"
                },
                {
                    alt: "red network",
                    link: "https://www.youtube.com/channel/UCFjcuzWcPsBf65OASlWMVZA",
                    type: "youtube"
                },
                {
                    alt: "red network",
                    link: "https://twitter.com/selva_escondida",
                    type: "twitter"
                },
            ],
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/delmar/delmar-olas.jpg",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/delmar/delmar-olas.jpg",
                },
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/logo-selva2.svg",
            title: "DEL MAR BEACHFRONT CONDOS",
            soon: "próximamente",
            isNewResidential: true,
            description: "Un lujoso proyecto residencial de 28 exclusivos departamentos, envuelto por la belleza del Caribe Mexicano y la tranquilidad de sus paisajes. Cuenta con más de 10 cómodas amenidades, una piscina infinity con impresionantes vistas 360° de las playas de Puerto Morelos y acabados modernos hacen de Del Mar una obra maestra de la que querrás formar parte.",
            housing: "28",
            location: "Puerto Morelos, Q.Roo",
            status: "Próximamente",
            construction: "2023",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/delmar/portadaVideoDesk.jpg",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/portadaVideoMobile.jpg",
            videoLink: "XtptDRbJl-8"
        },
        {
            type: "gallery-residential-component",
            title: "conoce Del Mar",
            description: "Exclusivos departamentos frente al mar con acceso privado a la playa, a menos de 25 minutos de Cancún y Playa del Carmen.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/1.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/1.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/2.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/2.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/3.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/3.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/4.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/4.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/5.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/5.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/6.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/6.jpg",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/7.jpg",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/delmar/gallery/mobile/7.jpg",
                }
            ]
        },
        {
            type: "contact-map-component",
            gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.231605175662!2d-86.89364969385508!3d20.867128334869157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e89ee0241ff1f%3A0x82b5c1f53c67e27b!2sShowroom%20Selva%20Escondida!5e0!3m2!1ses!2smx!4v1674531445616!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            contact: {
                title: "SÉ EL PRIMERO EN ENTERARTE DEL GRAN LANZAMIENTO DE del mar",
                description: "Déjanos tus datos y nos pondremos en contacto contigo.",
            },
            hbsptSettings: {
                portalId: '8077024',
                region: 'na1',
                formId: '42fc5c74-9eaa-47ac-8135-9dc191f9cdfe',
                target: '#hbspt-form-42fc5c74-9eaa-47ac-8135-9dc191f9cdfe', // target is formid
            }
        },
        {
            type: "others-proyects-component",
            title: "Otros proyectos",
            description: "Conoce más sobre la innovación en desarrollo inmobiliario que hemos logrado.",
            items: [
                {
                    name: "SELVA ESCONDIDA II",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingSelvaEscondidaIIES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/selva2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/selva2.webp",
                },
                {
                    name: "NAAY BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingNaayES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/naay.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/naay.webp",
                },
                {
                    name: "EVIA INTERLOMAS",
                    description: "Estado de México",
                    link: pagesContants.landingEviaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/evia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/evia.webp",
                },
                {
                    name: "SELVA ESCONDIDA RESIDENCIAL",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingSelvaEscondidaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/selva1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/selva1.webp",
                },
                {
                    name: "KAANA RESIDENCIAL",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingKaanaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/kaana.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/kaana.webp",
                },
                {
                    name: "LUUM BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingLuumES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/luum.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/luum.webp",
                },
                {
                    name: "PALMAS BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingPalmasES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/palmas.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/palmas.webp",
                },
                {
                    name: "venecia residencial",
                    description: "Ciudad de México",
                    link: pagesContants.landingVeneciaES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/venecia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/venecia.webp",
                },
            ]
        },
    ]
}

export default apiResponseMock;