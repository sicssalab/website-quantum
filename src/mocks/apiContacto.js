import image from "../assets/sicssa/contacto/contacto.jpeg";
const apiHome = {
  items: [
    {
      type: "header-blog-component",
      title: "<strong>Contáctanos</strong>",
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
      image: image,
      altImage: "iamgen",
      contact: {
        title: "Informes dudas y comentarios",
        description:
          `Contamos con 4 líneas disponibles, llámanos al
          Teléfono:
          <br>
          (52 55) 5768 5508
          <br>
          E-mail
          <br>
          atencionaclientes@quantumdo.com
          <br>
          <br>
          <h5>Dirección</h5>
          Retorno 28 de Avenida del Taller, no. 18
          Col. Jardín Balbuena, CP 15900, México DF`,
      },
    },
  ],
};

export default apiHome;
