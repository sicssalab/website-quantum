import pagesContants from "../constants/pagesContants";

const apiPalmasMock = {
    items: [
        {
            type: "header-component",
            title: "Palmas<br />by selva escondida",
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
                    url: "https://sicssalab.net/test-miraro/mocks/palmas/banner/banner-palmas1.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/palmas/banner/mobile/banner-mobile-palmas1.webp",
                },
                {
                    name: "test2",
                    url: "https://sicssalab.net/test-miraro/mocks/palmas/banner/banner-palmas2.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/palmas/banner/mobile/banner-mobile-palmas2.webp",
                },
                {
                    name: "test3",
                    url: "https://sicssalab.net/test-miraro/mocks/palmas/banner/banner-palmas3.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/palmas/banner/mobile/banner-mobile-palmas3.webp",
                }
            ],
        },
        {
            type: "information-residential-component",
            logo: "https://sicssalab.net/test-miraro/mocks/palmas/logo-palmas1.svg",
            // logoUrl: 'https://www.selvaescondida.mx',//Italu: En esta no llevar a alguna página web con el logo.
            // title: "residencial puerto morelos",//ya lo trae el logo
            description: "An exclusive, private gated community in harmony with nature, consisting of 24 condominiums with more than ten amenities, including private security, a swimming pool, gym, and clubhouse.",
            housing: "24",
            location: "Puerto Morelos, Q.Roo",
            status: "Sold",
            construction: "2022 - 2023",
            altImage: 'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/palmas/video-desk.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/video-mobile.webp",
            videoLink: "9MNSWLW8dvQ"
        },
        {
            type: "gallery-residential-component",
            title: "About palmas by selva escondida",
            description: "A gated community just eight minutes from the beach from the beach with more than ten amenities.",
            items: [
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/1.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/2.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/3.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/3.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/4.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/4.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/5.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/5.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/6.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/6.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/7.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/7.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/8.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/8.webp",
                },
                {
                    alt: 'alt-PathImg',
                    image: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/9.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/palmas/gallery/mobile/9.webp",
                }
            ]
        },
        {
            type: "location-map-component",
            //gmap: '<iframe class="iframe-gmap lazyload" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.7650418593253!2d-100.42723078593198!3d20.655831072005434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35a6cfaa0dded%3A0x4775847a62e0c800!2sPalmas%20Residencial%2C%20Quer%C3%A9taro!5e0!3m2!1ses-419!2smx!4v1679958625334!5m2!1ses-419!2smx" frameborder="0"></iframe>', //TODO iframe,
            gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931.9979206444112!2d-86.90383474865244!3d20.872385496453038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e63f667be688b%3A0xa952ed9b8b379c2!2sPalmas%20Residencial!5e0!3m2!1ses!2smx!4v1683592360634!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            location: {
                title: "LOCATION",
                description: "01, Av. de las Palmas, 77580 Puerto Morelos, Q.R.",
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
                    name: "LUUM BY SELVA ESCONDIDA",
                    description: "Puerto Morelos, Quintana Roo",
                    link: pagesContants.landingLuumES,
                    image: "https://sicssalab.net/test-miraro/mocks/other-proyects/luum.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/other-proyects/mobile/luum.webp",
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

export default apiPalmasMock;