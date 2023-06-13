import apiItemsThumbnailBlogs from "./apiItemsThumbnailBlogs";

const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<strong>blog</strong>",
      items: [
        {
          name: "test1",
          url: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/blog-portada.webp",
          urlMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/blog-mobile.webp",
        },
      ],
    },
    {
      type: "blog-home-catogories-component",
      //TODO por orden pone el link de arriba
      //TODO orden parametro en el contenedor
      titleCategories: "categorías",
      items: [
        {
          name: "Bienes raíces",
          altImage: "Bienes raíces",
          order: 5, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
          thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
          thumbnailImageBigMobile: "",
          thumbnailImage: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/bienes-raices.jpg",
          thumbnailImageMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/bienes-raices-mobile.webp",
          //thumbnailDescription: "conoce más sobre el sector inmobiliario",
          tag: "bienes-raices",
          //Puede venir para usar como el mismo llamado en categorias
          //o solo lo trae en los blogs
          items: [],
          //TODO se genera al vuelo
          //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
        },
        {
          name: "arquitectura",
          altImage: "arquitectura",
          order: 2, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
          thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
          thumbnailImageBigMobile: "",
          thumbnailImage: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/arquitectura.jpg",
          thumbnailImageMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/arquitectura-mobile.webp",
          //thumbnailDescription: "tendencias, decoración, infraestructura, ANÁLISIS y más",
          tag: "arquitectura",
          //TODO se genera al vuelo
          //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
        },
        {
          name: "construcción",
          altImage: "arquitectura",
          order: 3, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
          thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
          thumbnailImageBigMobile: "",
          thumbnailImage: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/construccion.jpg",
          thumbnailImageMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/construccion-mobile.webp",
          //thumbnailDescription: "análisis, detrás de cámaras, consejos y más de construcción",
          tag: "construccion",
          //TODO se genera al vuelo
          //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
        },
        {
          name: "inversiones",
          altImage: "arquitectura",
          order: 4, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
          thumbnailImageBig: "", //TODO la primera que tenga imagen grande la pone al inicio
          thumbnailImageBigMobile: "",
          thumbnailImage: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/inveriones.jpg",
          thumbnailImageMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/inversiones-mobile.webp",
          //thumbnailDescription: "APRENDE todo sobre las inversiones inmobiliarias",
          tag: "inversiones",
          //TODO se genera al vuelo
          //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
        },
        {
          name: "noticias",
          altImage: "arquitectura",
          order: 1, //TODO orden 1 muestra la imagen grande, necesita a thumbnailImageBig mobile opcional
          thumbnailImageBig: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/noticias.jpg", //TODO la primera que tenga imagen grande la pone al inicio
          thumbnailImageBigMobile: "https://sicssalab.net/test-miraro/mocks/blog-home/mobile/_noticias-blog.webp",
          thumbnailImage: "",
          thumbnailImageMobile: "",
          //thumbnailDescription: "Informate sobre las ultimas noticias del sector inmobiliario",
          tag: "noticias",
          //TODO se genera al vuelo
          //link: "{locale}/{slug:blog}/slugSub:categorias?category={tag}", //
        },
      ],
      blogsTop: {
        title: "THE MOST READ",
        //TODO last 3 blogs
        items: [
          apiItemsThumbnailBlogs[0],
          apiItemsThumbnailBlogs[1],
          apiItemsThumbnailBlogs[2],
        ],
        destino: "Destino",
      },
    },
    {
      type: "contact-blog-component",
      image: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/evia.jpg", //TODO iframe,
      //imageMobile: Img1, //TODO iframe,
      altImage: "iamgen",
      contact: {
        title: "Subscribe to our newsletter",
        description:
          "Receive the best real estate content, tips, and special information.",
      },
      hbsptSettings: {
        portalId: "8077024",
        region: "na1",
        formId: "747bdea7-8c11-4ebe-8c92-2d29bfa7d869",
        target: "#hbspt-form-747bdea7-8c11-4ebe-8c92-2d29bfa7d869", // target is formid
      },
    },
  ],
};

export default apiHome;
