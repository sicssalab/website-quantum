import proyectsMock from "./proyectsMock";
import pressMock from "./pressMock";
import pagesContants from "../constants/pagesContants";
import mainHeader1 from "../assets/sicssa/home/main.jpeg";


const apiHome = {
    items: [
        {
            type: "header-component",
            title: "<strong>expertos</strong><br />en soluciones tecnológicas",
            description: "Con tecnología de ingeniería avanzada, damos solución a los proyectos más demandantes",
            isLanding: false,
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
            items: [
                {
                    name: "main",
                    //url: require("/src/assets/sicssa/home/main.jpeg"),
                    url: mainHeader1,
                    urlMobile:"/src/assets/sicssa/home/main-mobile.jpeg",
                },
                {
                    name: "main 2",
                    url: "/src/assets/sicssa/home/main-2.jpeg",
                    urlMobile:"/src/assets/sicssa/home/main-2-mobile.jpeg",
                }
            ],
        },
        {
            type: "proyects-component",
            title: "<strong>¿Que hacemos?</strong>",
            description: "Somos especialistas en todos estos servicios, desarrollando con las tecnológias más avanzadas",
            linkMore: pagesContants.proyectsES,
            textMore: "Nuestros Proyectos",
            ...proyectsMock
        },
        {
            type: "experience-component",
            title: "<strong>la experiencia es parte<br>de nuestro éxito</strong>",
            description: "Con más de 8 años de experiencia en soluciones tecnológicas, es como logramos seguir sumando más clientes hacia la era digital",
            videoType: "youtube",
            altImage:'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/home/video-miraro-webp.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/home/video-miraro.webp",
            videoLink: "I69BKXFRm4U"
        },
        {
            type: "press-component",
            ...pressMock
        },
    ]
}

export default apiHome;