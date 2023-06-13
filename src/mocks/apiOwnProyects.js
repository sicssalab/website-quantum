
import pagesContants from "../constants/pagesContants";

const apiOwnProyects = {
    items: [
        {
            type: "header-component",
            title: "<span class='title-bg'>Nuestros<br /><strong>Proyectos</strong></span>",
            isLanding: false,
            socialNetwork: [
                {
                    alt: "red network",
                    link: "https://www.facebook.com/grupomiraro",
                    type: "facebook"
                },
                {
                    alt: "red network",
                    link: "https://www.instagram.com/grupomiraro",
                    type: "instagram"
                },
                {
                    alt: "red network",
                    link: "https://www.linkedin.com/company/grupo-miraro",
                    type: "linkedin"
                },
                {
                    alt: "red network",
                    link: "https://www.youtube.com/@grupomiraro",
                    type: "youtube"
                },
            ],
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/own-proyects/miraro-home1.webp",
                    urlMobile:"https://sicssalab.net/test-miraro/mocks/own-proyects/portada-proyectos.webp",
                }
            ],
        },
        {
            type: "own-proyects-component",
            title: "desarrollos inmobiliarios <strong>en México</strong>",
            description: "Nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto.",
            items: [
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/selva2.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/selva2.webp",
                    title: 'SELVA ESCONDIDA II',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingSelvaEscondidaIIES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/selva1.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/selva1.webp",
                    title: 'SELVA ESCONDIDA RESIDENCIAL',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingSelvaEscondidaES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/evia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/evia.webp",
                    title: 'EVIA INTERLOMAS',
                    address: 'Huixquilucan, Estado de México, México',
                    link: pagesContants.landingEviaES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/naay.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/naay.webp",
                    title: 'NAAY BY SELVA ESCONDIDA',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingNaayES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/palmas.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/palmas.webp",
                    title: 'PALMAS BY SELVA ESCONDIDA',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingPalmasES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/luum.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/luum.webp",
                    title: 'LUUM BY SELVA ESCONDIDA',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingLuumES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/kaana.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/kaana.webp",
                    title: 'KAANA BY SELVA ESCONDIDA',
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingKaanaES
                },
                {
                    alt: 'alt-image',
                    image: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/ordenador/proyectos/venecia.webp",
                    imageMobile: "https://sicssalab.net/test-miraro/mocks/home-other-proyects/mobile/proyectos/venecia.webp",
                    title: 'VENECIA RESIDENCIAL',
                    address: 'Azcapotzalco, Ciudad de México, México',
                    link: pagesContants.landingVeneciaES
                },
                {
                    alt: 'alt-image',
                    title: 'DEL MAR BY SELVA ESCONDIDA',
                    subTitle: "Próximamente",
                    address: 'Puerto Morelos, Quintana Roo, México',
                    link: pagesContants.landingDelMarES
                },
            ]
        },
    ]
}

export default apiOwnProyects;