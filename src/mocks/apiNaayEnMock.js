import pagesContants from "../constants/pagesContants";

const apiPageMock = {
    items: [
        {
            type: "header-component",
            title: "naay<br /><strong class='font-same'>by Selva Escondida</strong>",
            isLanding: true,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/selvaescondidamx",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/selvaescondidamx/?hl=es",
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
                    url: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/banner_principal/Baner-Principal.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/banner_principal/1.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/banner_principal/AnyConv.com__2.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/banner_principal/2.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/banner_principal/AnyConv.com__3.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/banner_principal/3.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/naay/logo-naay.svg",
            logoUrl: 'https://www.selvaescondida.mx/en/naay',
            description: "An exclusive 30-condominium gated community in the tropical jungle of the Riviera Maya with more than ten exclusive amenities such as a swimming pool, clubhouse, gym, and security booth.",
            housing: "30",
            location: "Puerto Morelos, Q.Roo",
            status: "En Venta",
            construction: "2022 - 2023",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/video_cover/Baner-Video.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/video_cover/Baner-Video.webp",
            videoLink: "N65s5N1Wsxk"
        },
        {
            type: "gallery-residential-component",
            title: "ABOUT Naay by selva escondida",
            description: "Two and three-bedroom condos only eight minutes from the beach, with finishes inspired by nature.",
            floatBoxX: "left",
            floatBoxY: "bottom",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__01-galeria.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__02-galeria.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__03-galeria.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-4.webp",
                    //imageMobile: ImgGM4,
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__5 (1).webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__7.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-7.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__8.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-8.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__9.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-9.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__10.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-10.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__11.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/naay/Ordenador/galeria/Galeria-11.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/naay/Mobile/galeria/AnyConv.com__12.webp",
                },
            ]
        },
        {
            type: "contact-map-component",
            gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.231605175662!2d-86.89364969385508!3d20.867128334869157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e89ee0241ff1f%3A0x82b5c1f53c67e27b!2sShowroom%20Selva%20Escondida!5e0!3m2!1ses!2smx!4v1674531445616!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            contact: {
                title: "Invest in this destination and live in the Riviera Maya.",
                description: "Please fill in the following information, and we will contact you soon!",
            },
            hbsptSettings: {
                portalId: '8077024',
                region: 'na1',
                formId: 'b0b88133-948d-4280-aad1-685d07aba9e0',
                target: '#hbspt-form-b0b88133-948d-4280-aad1-685d07aba9e0', // target is formid
            }
        },
        {
            type: "others-proyects-component",
            title: "Other projects",
            description: "Learn more about our achievements in innovative real estate development.",
            items: [
                {
                    name: "SELVA ESCONDIDA II",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingSelvaEscondidaIIES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/selva2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/selva2.webp",
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

export default apiPageMock;