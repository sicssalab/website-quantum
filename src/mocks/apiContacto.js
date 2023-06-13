const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<strong>Contáctanos</strong>",
      items: [
        {
          name: "test1",
          url: "https://sicssalab.net/test-miraro/mocks/contacto/ordenador/portada.webp",
          urlMobile: "https://sicssalab.net/test-miraro/mocks/contacto/mobile/portada-mobile.webp",
        },
      ],
    },
    {
      type: "contact-blog-component",
      image: "https://sicssalab.net/test-miraro/mocks/blog-home/ordenador/evia.jpg", //TODO iframe,
      altImage: "iamgen",
      contact: {
        title: "Invierte en uno de nuestros desarrollos inmobiliarios en méxico",
        description:
          "Déjanos tus datos y nos pondremos en contacto contigo.",
      },
      hbsptSettings: {
        portalId: "8077024",
        region: "na1",
        formId: "1e96a164-d229-4a48-bbae-07288a59ab63",
        target: "#hbspt-form-1e96a164-d229-4a48-bbae-07288a59ab63", // target is formid
      },
    },
  ],
};

export default apiHome;
