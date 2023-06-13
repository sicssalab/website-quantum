const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<strong>CONTACT US</strong>",
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
        title: "Invest in one of our real estate developments in Mexico",
        description: "Please fill in the following information, and we will contact you soon!",
      },
      hbsptSettings: {
        portalId: "8077024",
        region: "na1",
        formId: "31318a71-1359-499f-96cf-8f4f3602d34b",
        target: "#hbspt-form-31318a71-1359-499f-96cf-8f4f3602d34b",
      },
    },
  ],
};

export default apiHome;
