import logo from "../assets/LOGO-MARCAS-PROVEEDORES/12aqua-solutions.jpeg";

import main1 from "../assets/landings/aqua-solutions/HOME AQUA.jpeg"
import main2 from "../assets/landings/aqua-solutions/HOME AQUA 2.jpg"

import pro01_1 from "../assets/landings/aqua-solutions/productos/sistemas-di-reactivo-tipo-i/1.jpg";
import pro02_1 from "../assets/landings/aqua-solutions/productos/rodi-i-ultrapuros/1.png";
import pro03_1 from "../assets/landings/aqua-solutions/productos/tipo-ii/1.png";
import pro04_1 from "../assets/landings/aqua-solutions/productos/tipo-ii-rodi/1.jpg";
import pro05_1 from "../assets/landings/aqua-solutions/productos/pretratamiento/1.jpg";

const apiSelcaEscondidaMock = {
  items: [
    {
      type: "header-component",
      title: "aqua solutions",
      isLanding: true,
      socialNetwork: [
        {
          alt: "red network",
          link: "https://www.facebook.com/profile.php?id=100066922524010",
          type: "facebook",
        },
        {
          alt: "red network",
          link: "https://twitter.com/AquaSolInc",
          type: "twitter",
        },
      ],
      items: [
        {
          name: "test1",
          url: main1,
          // urlMobile:
          //   "https://sicssalab.net/test-miraro/mocks/selva-escondidaii/banner-selva1.webp",
        },
        {
          name: "test2",
          url: main2,
        },
      ],
    },
    {
      type: "information-residential-component",
      logo: logo,
      title: "aqua solutions",
      logoUrl: "",
      description: `AQUA SOLUTIONS se dedica a proporcionar a sus clientes sistemas de agua de laboratorio que proporcionen de manera conveniente, económica y confiable agua de grado reactivo de la más alta pureza para aplicaciones de laboratorio, a nivel mundial.
      <br><br>
      Sistemas de purificación de agua de laboratorio AQUA SOLUTIONS
      Nos enorgullecemos de nuestra capacidad para responder con prontitud y precisión a las solicitudes de ventas y asistencia técnica de nuestros clientes. ¡Estamos listos para ayudarlo a dimensionar, diseñar, elegir y comprar el sistema de purificación de agua de AQUA SOLUTIONS que MEJOR satisfaga sus necesidades!
      <br><br>
      Y, si eso no fuera suficiente, ofrecemos la más alta calidad y rendimiento de la industria, junto con la garantía de sistema más larga y más funciones y beneficios "estándar" que los demás.`,
      videoLink: "",
    },
    {
      type: "product-list",
      title: "Productos",
      items: [
        {
          alt: "alt-logo",
          srcImage: pro01_1,
          typeProduct: {
            name: "producto",
            keyname: "producto",
          },
          categoryProduct: {
            name: "producto",
            keyname: "producto",
          },
          name: "Sistemas DI de grado reactivo tipo I",
          description: "Todos los sistemas DI Tipo I de AQUA SOLUTIONS producen agua ultrapura de 18,2 megaohmios-cm que cumple o supera las especificaciones ASTM, CAP y CLSI para agua de grado reactivo Tipo I. Las versiones de flujo estándar (2 litros/min) y alto flujo/alta capacidad (8-12 litros/min) están disponibles en versiones analítica, biológica y de TOC ultrabajo.",
          descriptionLong: `Todos los sistemas DI Tipo I de AQUA SOLUTIONS producen agua ultrapura de 18,2 megaohmios-cm que cumple o supera las especificaciones ASTM, CAP y CLSI para agua de grado reactivo Tipo I. Las versiones de flujo estándar (2 litros/min) y alto flujo/alta capacidad (8-12 litros/min) están disponibles en versiones analítica, biológica y de TOC ultrabajo.
          <br><br>
          <h5>Estos asequibles sistemas de purificación de agua de laboratorio Tipo I se utilizan en operaciones que utilizan agua corriente del grifo o agua pretratada.</h5>
          Nuestros sistemas DI y RODI TIPO I de flujo estándar (2 litros/min) funcionan con alimentación interna de 12 VCC y pueden aceptar alimentación de 100-240 VCA a 50/60 Hz para uso industrial en cualquier parte del mundo. Están certificados por CSA y pueden tener la marca "CE" para exportación.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro02_1,
          typeProduct: {
            name: "producto",
            keyname: "producto",
          },
          categoryProduct: {
            name: "producto",
            keyname: "producto",
          },
          name: "Sistemas RODI tipo I ultrapuros de 18,2 megaom-cm",
          description: "Los sistemas RODI combinados de AQUA SOLUTIONS incluyen un pretratamiento de ósmosis inversa incorporado y producen agua ultrapura Tipo I, 18,2 megaohmios-cm que cumple o supera las especificaciones ASTM, CAP y CLSI para agua de grado reactivo Tipo I. Nuestros sistemas de purificación de agua de laboratorio de flujo estándar (2 litros/minuto) y alto flujo/alta capacidad (8-12 litros/minuto) están disponibles en versiones analítica, biológica y de TOC ultrabajo.",
          descriptionLong: `Los sistemas RODI combinados de AQUA SOLUTIONS incluyen un pretratamiento de ósmosis inversa incorporado y producen agua ultrapura Tipo I, 18,2 megaohmios-cm que cumple o supera las especificaciones ASTM, CAP y CLSI para agua de grado reactivo Tipo I. Nuestros sistemas de purificación de agua de laboratorio de flujo estándar (2 litros/minuto) y alto flujo/alta capacidad (8-12 litros/minuto) están disponibles en versiones analítica, biológica y de TOC ultrabajo.
          <br><br>
          Estos sistemas compactos pueden funcionar con prácticamente cualquier agua del grifo de calidad que contenga menos de 1000 ppm de sólidos disueltos totales.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro03_1,
          typeProduct: {
            name: "producto",
            keyname: "producto",
          },
          categoryProduct: {
            name: "producto",
            keyname: "producto",
          },
          name: "Tipo II Punto de uso Sistemas de purificación de agua de laboratorio",
          description: "El agua Tipo II se utiliza habitualmente para uso general en laboratorio, agua de alimentación a analizadores, pretratamiento para sistemas Tipo I y para lavar y enjuagar cristalería, ya sea manualmente o en el ciclo de enjuague final de una lavadora automática de cristalería.",
          descriptionLong: `El agua Tipo II se utiliza habitualmente para uso general en laboratorio, agua de alimentación a analizadores, pretratamiento para sistemas Tipo I y para lavar y enjuagar cristalería, ya sea manualmente o en el ciclo de enjuague final de una lavadora automática de cristalería. Los sistemas de agua de laboratorio de grado reactivo AQUA SOLUTIONS Tipo II producen más de 2 megaohmios-cm de agua DI que cumple o supera los estándares ASTM, CAP y CLSI para agua Tipo II.
          <br><br>
          Para eliminar el costo y los inconvenientes asociados con el "servicio DI" tradicional, estos sistemas de purificación de agua de laboratorio tipo II están diseñados desde cero para que el usuario pueda instalarlos y repararlos. Cuentan con un conector de conexión rápida, una luz de pureza fácil de leer y un tanque DI de repuesto.
          <br><br>
          Las versiones de módulo simple y doble están disponibles para una variedad de aplicaciones que requieren agua DI tipo II a caudales de 5 a 12 LPM. También están disponibles como sistemas "DW" de mayor flujo y alta capacidad para lavadoras de cristalería que requieren caudales de 20 a 40 LPM. Nuestros sistemas RODI incluyen un pretratamiento de ósmosis inversa incorporado para reducir los costos operativos y cuentan con recirculación continua para mantener la máxima pureza del agua.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro04_1,
          typeProduct: {
            name: "producto",
            keyname: "producto",
          },
          categoryProduct: {
            name: "producto",
            keyname: "producto",
          },
          name: "Tipo II Punto de uso Sistemas RODI",
          description: "El agua Tipo II se utiliza habitualmente para uso general en laboratorio, agua de alimentación a analizadores, pretratamiento para sistemas Tipo I y para lavar y enjuagar cristalería, ya sea manualmente o en el ciclo de enjuague final de una lavadora automática de cristalería.",
          descriptionLong: `El agua Tipo II se utiliza habitualmente para uso general en laboratorio, agua de alimentación a analizadores, pretratamiento para sistemas Tipo I y para lavar y enjuagar cristalería, ya sea manualmente o en el ciclo de enjuague final de una lavadora automática de cristalería. Los sistemas RODI de grado reactivo tipo II de AQUA SOLUTIONS producen agua desionizada de 2 a 15 megaohmios-cm que cumple o supera los estándares ASTM, CAP y CLSI para agua tipo II.
          <br><br>
          Para eliminar el costo y los inconvenientes asociados con el "servicio DI" tradicional, estos sistemas de purificación de agua de laboratorio tipo II están diseñados desde cero para que el usuario pueda instalarlos y repararlos. Incluyen pretratamiento de ósmosis inversa incorporado para reducir los costos operativos y cuentan con recirculación continua para mantener la máxima pureza del agua.
          <br><br>
          Las versiones estándar y de alto flujo están disponibles para una variedad de aplicaciones que requieren agua DI tipo II a caudales de 5 a 12 LPM. También están disponibles como sistemas "DW" de mayor flujo y alta capacidad para lavadoras de cristalería que requieren caudales de 20 a 40 LPM.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
        {
          alt: "alt-logo",
          srcImage: pro05_1,
          typeProduct: {
            name: "producto",
            keyname: "producto",
          },
          categoryProduct: {
            name: "producto",
            keyname: "producto",
          },
          name: "Pretratamiento de ósmosis inversa (RO) de AQUA SOLUTIONS",
          description: "Los sistemas de pretratamiento de ósmosis inversa (RO) de AQUA SOLUTIONS están disponibles con tasas de producción de RO de 10 a 60 litros/hora para nuestros sistemas de mesa estándar y de 1 a 2 galones/minuto para sistemas montados en bastidor de alta capacidad.",
          descriptionLong: `Los sistemas de pretratamiento de ósmosis inversa (RO) de AQUA SOLUTIONS están disponibles con tasas de producción de RO de 10 a 60 litros/hora para nuestros sistemas de mesa estándar y de 1 a 2 galones/minuto para sistemas montados en bastidor de alta capacidad. Los sistemas eliminan entre el 95% y el 99% de los contaminantes del agua del grifo, lo que representa una tecnología rentable para el pretratamiento del agua del grifo antes de la purificación final mediante un sistema DI.
          <br><br>
          Funcionan con agua del grifo con hasta 1000 PPM de sólidos disueltos totales y la mayoría de los sistemas incluyen prefiltros incorporados. Hay disponibles una variedad de opciones de tanques de almacenamiento, incluidos tanques presurizados que evitan el riesgo de contaminación transmitida por el aire y eliminan la necesidad de bombas de alimentación adicionales.
          `,
          videoLink: "",
          sendPriceText: "Ver más información",
        },
      ],
    },
  ],
};

export default apiSelcaEscondidaMock;
