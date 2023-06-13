import pagesContants from "../constants/pagesContants";
import Logo from "../assets/miraro_blanco-01.svg";

import Img1 from "../assets/mocks/blog-preview/ordenador/portada-preview.webp";
import ImgM1 from "../assets/mocks/blog-preview/mobile/portada-preview-mobile.webp";
import apiItemsThumbnailBlogs from "./apiItemsThumbnailBlogs";

const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-preview",
      title: "",
      items: [
        {
          url: Img1,
          urlMobile: ImgM1,
          altImage: "Img Riviera Maya",
        },
      ],
    },
    {
      type: "body-blog-preview",
      destino:
        '<span style="display:block; text-align:center; letter-spacing: 2px;">DESTINO</span>',
      bodyblogPreview:
        '<h1 style="display:block; text-align:center;">¿Porque invertir en la riviera maya?</h1>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>' +
        '<h2 style="display:block; text-align:left;">Where does it come from?</h2>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>' +
        '<h2 style="display:block; text-align:left;">Why do we it use it?</h2>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>' +
        '<img src="https://cms.selvaescondida.mx/uploads/Puerto_1_c90bbf6b95.jpg" alt="LUUM"></br></br></br>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>' +
        '<h2 style="display:block; text-align:left;">Why do we it use it?</h2>' +
        '<p style="display:block; text-align:justify;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></br>',
    },
    {
      type: "contact-blog-preview",
      contact: {
        title: "SUSCRÍBETE A NUESTRO NEWSLETTER Y RECIBE CONTENIDO ESPECIAL",
      },
      hbsptSettings: {
        portalId: "8077024",
        region: "na1",
        formId: "a3097352-45eb-4c54-ba8a-c14b6e265282",
        target: "#hbspt-form-a3097352-45eb-4c54-ba8a-c14b6e265282", // target is formid
      },
    },
    {
      type: "more-view-blog",
      title: "mas recientes",
      items: [
        apiItemsThumbnailBlogs[0],
        apiItemsThumbnailBlogs[1],
        apiItemsThumbnailBlogs[2],
      ],
    },
  ],
};

export default apiHome;
