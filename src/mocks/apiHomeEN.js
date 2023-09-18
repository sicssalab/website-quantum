import proyectsMock from "./proyectsMockEN";
import pressMock from "./pressEnMock";
import pagesContants from "../constants/pagesContants";

const apiHome = {
    items: [
        {
            type: "header-component",
            title: "<strong>EXPERTS</strong><br />IN TECHNOLOGICAL SOLUTIONS",
            description: "With advanced engineering technology, we provide solutions to the most demanding projects",
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
                    url: "/src/assets/sicssa/home/main.jpeg",
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
            title: "<strong>WHAT DO WE DO?</strong>",
            description: "We are specialists in all these services, using the most advanced technologies",
            linkMore: pagesContants.proyectsEN,
            textMore: "We our Projects",
            ...proyectsMock
        },
        {
            type: "experience-component",
            title: "<strong>THE EXPERIENCE IS PART<br>OF OUR SUCCESS</strong>",
            description: "With more than 8 years of experience in technological solutions, this is how we managed to continue adding more clients to the digital age.",
            videoType: "youtube",
            altImage:'Imagen video',
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