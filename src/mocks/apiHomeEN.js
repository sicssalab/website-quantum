import proyectsMock from "./proyectsMock";
import pressMock from "./pressMock";
//import pagesContants from "../constants/pagesContants";
const apiHome = {
    items: [
        {
            type: "header-component",
            title: "Analytycal Solutions <br /><strong>for Quality Assurance</strong>",
            //description: "We’re a real estate development companies in Mexico focused on creating experiences, unique spaces, and high-end residential projects.",
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
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-quantum/main/248693479_263736935764903_7349296694027917230_n.jpg",
                    //urlMobile:"https://sicssalab.net/test-miraro/mocks/main/1-portada.webp",
                },
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-quantum/main/188820961_4632832730076595_6041321748913945035_n.png",
                    //urlMobile:"https://sicssalab.net/test-miraro/mocks/main/2-portada.webp",
                },
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-quantum/main/188534880_4608711865822015_6055135317591216674_n.png",
                    //urlMobile:"https://sicssalab.net/test-miraro/mocks/main/3-portada.webp",
                },
                // {
                //     name: "test1",
                //     url: "https://sicssalab.net/test-miraro/mocks/main/4.webp",
                //     urlMobile:"https://sicssalab.net/test-miraro/mocks/main/4-portada.webp",
                // },
            ],
        },
        {
            type: "proyects-component",
            title: "Lorem Ipsum <br /> <strong>Lorem Ipsum</strong>",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna pulvinar, porta felis ultrices, lobortis nibh. Ut nec ligula efficitur, dictum lorem nec, dapibus arcu. Proin iaculis iaculis felis non bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sit amet ante quis neque posuere sollicitudin.",
            //linkMore: pagesContants.proyectsEN,
            textMore: "See projects",
            ...proyectsMock
        },
        {
            type: "experience-component",
            title: "Lorem Ipsum <br /><strong>Lorem Ipsum</strong>",
            description: "Quantum Analytical es una empresa 100% nacional teniendo como principales objetivos la industria farmacéutica, química, petroquímica y de alimentos; así como universidades e institutos de investigación.",
            videoType: "youtube",
            altImage:'Imagen Experience',
            frontPage: "https://sicssalab.net/test-miraro/mocks/home/video-miraro-webp.webp",
            frontPageMobile: "https://sicssalab.net/test-miraro/mocks/home/video-miraro.webp",
            videoLink: "tgbNymZ7vqY",
            videos: [
                {
                    url: "https://www.quantumdo.com/QuantumvidFLV.mp4",
                    type: "video/mp4"
                },
                {
                    url: "https://www.quantumdo.com/QuantumvidFLV.mov",
                    type: "video/mp4"
                },
            ]
        },
        {
            type: "press-component",
            ...pressMock,
            title:'<strong>Brands</strong>',
            description:'Quantum Analytical offers you a wide variety of analytical instrumentation equipment to satisfy your needs, among the diverse range of products that we handle you can find the following:',
        },
    ]
}

export default apiHome;