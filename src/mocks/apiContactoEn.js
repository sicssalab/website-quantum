const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<strong>CONTACT US</strong>",
      items: [
        {
          name: "test1",
          url: "/src/assets/sicssa/contacto/ordenador/main.jpeg",
          urlMobile: "/src/assets/sicssa/contacto/mobile/main.jpeg",
        },
      ],
    },
    {
      type: "contact-blog2-component",
      image: "/src/assets/sicssa/contacto/contacto.jpeg",
      altImage: "imagen",
      contact: {
        title: "TELL US ABOUT YOUR PROJECT",
        description:
          "Send us your details and we will contact you.",
      },
      hbsptSettings: {
        portalId: "43587290",
        region: "na1",
        formId: "d5077471-e5e0-401e-ac98-f6e42f6a3f4f",
        target: "#hbspt-form-d5077471-e5e0-401e-ac98-f6e42f6a3f4f", // target is formid
      },
    },
  ],
};

export default apiHome;
