import apiItemsThumbnailBlogs from "./apiItemsThumbnailBlogs";
const response = {
    items: [
        {
            type: "header-blog-component",
            title: "categorías",
            items: [
                {
                    name: "test1",
                    url: "https://sicssalab.net/test-miraro/mocks/blog-categorias/ordenador/__portada-categoria.webp",
                    urlMobile: "https://sicssalab.net/test-miraro/mocks/blog-categorias/mobile/__portada-mobile.webp",
                },
            ],
        },
        {
            type: "blog-categories-body-component",
            //TODO traera componentes internos con sus llamados para poder manipúlarlos desde el padre
            //TODO orden parametro en el contenedor
            titleBlog: "conoce más",
            textButtonMore: "ver más",
            items: [
                {
                    name: "Bienes raíces",
                    altImage: "Bienes raíces",
                    order: 5, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
                    thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
                    thumbnailImageBigMobile: "",
                    thumbnailImage: "",
                    thumbnailImageMobile: "",
                    thumbnailDescription: "conoce más sobre el sector inmobiliario",
                    tag: "bienes-raices",
                    //Puede venir para usar como el mismo llamado en categorias
                    //o solo lo trae en los blogs
                    items: [
                        ...apiItemsThumbnailBlogs
                    ]
                    //TODO se genera al vuelo
                    //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
                },
                {
                    name: "arquitectura",
                    altImage: "arquitectura",
                    order: 2, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
                    thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
                    thumbnailImageBigMobile: "",
                    thumbnailImage: "",
                    thumbnailImageMobile: "",
                    thumbnailDescription: "tendencias, decoración, infraestructura, ANÁLISIS y más",
                    tag: "arquitectura",
                    items: [
                        ...apiItemsThumbnailBlogs
                    ]
                    //TODO se genera al vuelo
                    //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
                },
                {
                    name: "construcción",
                    altImage: "arquitectura",
                    order: 3, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
                    thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
                    thumbnailImageBigMobile: "",
                    thumbnailImage: "",
                    thumbnailImageMobile: "",
                    thumbnailDescription: "análisis, detrás de cámaras, consejos y más de construcción",
                    tag: "construccion",
                    items: [
                        ...apiItemsThumbnailBlogs
                    ]
                    //TODO se genera al vuelo
                    //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
                },
                {
                    name: "inversiones",
                    altImage: "arquitectura",
                    order: 4, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
                    thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
                    thumbnailImageBigMobile: "",
                    thumbnailImage: "",
                    thumbnailImageMobile: "",
                    thumbnailDescription: "APRENDE todo sobre las inversiones inmobiliarias",
                    tag: "inversiones",
                    items: [
                        ...apiItemsThumbnailBlogs
                    ]
                    //TODO se genera al vuelo
                    //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
                },
                {
                    name: "noticias",
                    altImage: "arquitectura",
                    order: 5, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
                    thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
                    thumbnailImageBigMobile: "",
                    thumbnailImage: "",
                    thumbnailImageMobile: "",
                    thumbnailDescription: "Informate sobre las ultimas noticias del sector inmobiliario",
                    tag: "noticias",
                    items: [
                        ...apiItemsThumbnailBlogs
                    ]
                    //TODO se genera al vuelo
                    //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
                },
            ],
            blogsTop: {
                title: "lo más Destacados",
                //TODO last 3 blogs
                items: [
                    apiItemsThumbnailBlogs[0],
                    apiItemsThumbnailBlogs[1],
                    apiItemsThumbnailBlogs[2],
                ]
            }
        },
    ]
}

export default response;