const apiHome = {
  //slug: "blog",// existe raiz del llamado a api
  items: [
    {
      type: "header-blog-component",
      title: "<strong>About us</strong>",
      items: [
        {
          name: "nosotros banner",
          url: "/src/assets/sicssa/nosotros/ordenador/main.png",
          urlMobile: "/src/assets/sicssa/nosotros/mobile/main.png",
        },
      ],
    },
    {
      type: "style-lige-contact-component",
      title: "WE TAKE YOUR COMPANY TO THE HIGHEST LEVEL",
      description:
        "Throughout our projects, we have worked with dedication, commitment, responsibility and ethics to offer developments with high value and greater security. Backed by more than 8 years of experience in analysis, design, development and maintenance in carrying out projects and with thousands of codes created, we are a benchmark for innovation in the sector.",
        image: "/src/assets/sicssa/nosotros/nosotros.png",
        imageMobile: "/src/assets/sicssa/nosotros/nosotros.png",
    },
    {
      type: "mission-vision-body-component",
      missionTitle: "OUR MISSION",
      missionDescription:
        "We strive to ensure CUSTOMER SUCCESS by providing services that fully meet expectations and requirements.",
      visionTitle: "OUR VISION",
      visionDescription:
        "It drives us to develop solutions that deliver outstanding QUALITY through the application of world-class experience and creativity.",
        image: "/src/assets/sicssa/nosotros/vision.png",
        imageMobile: "/src/assets/sicssa/nosotros/vision.png",
    },
  ],
};

export default apiHome;
