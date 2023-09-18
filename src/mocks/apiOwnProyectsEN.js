import pagesContants from "../constants/pagesContants";

const apiOwnProyects = {
    items: [
        {
            type: "header-component",
            title: "<span class='title-bg'>OUR<br /><strong>PROJECTS</strong></span>",
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
                    url: "/src/assets/sicssa/servicios/main/main.jpg",
                    urlMobile:"/src/assets/sicssa/servicios/main/main-mobile.jpg",
                }
            ],
        },
        {
            type: "own-proyects-component",
            title: "SUCCESS STORIES",
            description: "Committed to being one of the main developers of mobile applications and software in Mexico, we strive to exceed the expectations of our clients in each project.",
            items: [
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/1.png",
                    imageMobile: "/src/assets/sicssa/servicios/1.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/2.png",
                    imageMobile: "/src/assets/sicssa/servicios/2.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/3.png",
                    imageMobile: "/src/assets/sicssa/servicios/3.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/4.png",
                    imageMobile: "/src/assets/sicssa/servicios/4.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/5.png",
                    imageMobile: "/src/assets/sicssa/servicios/5.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/6.png",
                    imageMobile: "/src/assets/sicssa/servicios/6.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/7.png",
                    imageMobile: "/src/assets/sicssa/servicios/7.png",
                },
                {
                    alt: 'alt-image',
                    image: "/src/assets/sicssa/servicios/8.png",
                    imageMobile: "/src/assets/sicssa/servicios/8.png",
                },
            ]
        },
    ]
}

export default apiOwnProyects;