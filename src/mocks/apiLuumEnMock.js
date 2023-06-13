import pagesContants from "../constants/pagesContants";

const apiLuumMock = {
    items: [
        {
            type: "header-component",
            title: "Luum<br />by selva escondida",
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
                    url: "https://sicssalab.net/test-miraro/mocks/luum/banner/banner-luum1.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/luum/banner/mobile/banner-mobile-luum1.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/luum/banner/banner-luum2.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/luum/banner/mobile/banner-mobile-luum2.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/luum/banner/banner-luum3.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/luum/banner/mobile/banner-mobile-luum3.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/luum/logo-luum.svg",
            // logoUrl: 'https://www.selvaescondida.mx',//Italu: En esta no llevar a alguna página web con el logo.
            // title: "residencial puerto morelos",//ya lo trae el logo
            description: "Private residential development in the Riviera Maya that integrates with the beauty of the nature of Puerto Morelos and has more than 20 exclusive amenities such as a swimming pool, clubhouse, security, multi-purpose court, and more.",
            housing: "16",
            location: "Puerto Morelos, Q.Roo",
            status: "Sold",
            construction: "2022",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/luum/video-desk.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/luum/video-mobile.webp",
            videoLink: "jMGK_ft8XSg"
        },
        {
            type: "gallery-residential-component",
            title: "About luum by selva escondida",
            description: "A gated community of condos only eight minutes from the beach and less than 25 minutes from Cancun or Playa del Carmen.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/1.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/2.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/3.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/4.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/5.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/6.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/luum/gallery/7.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/luum/gallery/mobile/7.webp",
                },
            ]
        },
        {
            type: "location-map-component",
            //gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2002.231605175662!2d-86.89364969385508!3d20.867128334869157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e89ee0241ff1f%3A0x82b5c1f53c67e27b!2sShowroom%20Selva%20Escondida!5e0!3m2!1ses!2smx!4v1674531445616!5m2!1ses!2smx" frameborder="0"></iframe>', //TODO iframe,
            gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.008610266021!2d-86.90962600321039!3d20.8717032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e6367c8f0228f%3A0x62ff0599158d9249!2sLuum%20Residencial!5e0!3m2!1ses!2smx!4v1683592560171!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            location: {
                title: "LOCATION",
                description: "Calle Cardenal S/N Manzana 18 Lote 3,  77580 Puerto Morelos, Q.R.",
            },
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

export default apiLuumMock;