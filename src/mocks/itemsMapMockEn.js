import pagesContants from "../constants/pagesContants";

const itemsMapMock = [
  {
    name: "Quintana Roo",
    coordX: 675,
    coordY: 300,
    coordXMobile: 333,
    coordYMobile: 160,
    activeModal: true,
    viewState: "QR",
    items: [
      {
        coordX: 462,
        coordY: 99,
        coordXMobile: 248,
        coordYMobile: 46,
        item: {
          logo: "https://sicssalab.net/test-miraro/mocks/home/logos/selva1-color.svg",
          name: "Selva Escondida II",
          address: "Puerto Morelos, Quintana Roo, Mexico",
          link: pagesContants.landingSelvaEscondidaIIES,
          image: "https://sicssalab.net/test-miraro/mocks/home/mapa/selva2.jpg", //CAMBIAR IMAGEN
          textButton: "View project"
        }
      },
      {
        coordX: 458,
        coordY: 79,
        coordXMobile: 242,
        coordYMobile: 27,
        item: {
          logo: "https://sicssalab.net/test-miraro/mocks/home/logos/Kaana-color.svg",
          name: "Kaana",
          address: "Puerto Morelos, Quintana Roo, Mexico",
          link: pagesContants.landingKaanaES,
          image: "https://sicssalab.net/test-miraro/mocks/home/mapa/kaana.jpg", //CAMBIAR IMAGEN
          textButton: "View project"
        }
      },
      {
        coordX: 443,
        coordY: 95,
        coordXMobile: 235,
        coordYMobile: 60,
        item: {
          logo: "https://sicssalab.net/test-miraro/mocks/home/logos/luum-color.svg",
          name: "Luum",
          address: "Puerto Morelos, Quintana Roo, Mexico",
          link: pagesContants.landingLuumES,
          image: "https://sicssalab.net/test-miraro/mocks/home/mapa/luum.jpg", //CAMBIAR IMAGEN
          textButton: "View project"
        }
      },
      {
        coordX: 448,
        coordY: 117,
        coordXMobile: 229,
        coordYMobile: 42,
        item: {
          logo: "https://sicssalab.net/test-miraro/mocks/home/logos/palmas-color.svg",
          name: "Palmas",
          address: "Puerto Morelos, Quintana Roo, Mexico",
          link: pagesContants.landingPalmasES,
          image: "https://sicssalab.net/test-miraro/mocks/home/mapa/palmas.jpg", //CAMBIAR IMAGEN
          textButton: "View project"
        }
      },
    ]
  },
  {
    name: "Mexico City",
    coordX: 405,
    coordY: 360,
    coordXMobile: 204,
    coordYMobile: 189,
    item: {
      logo: "https://sicssalab.net/test-miraro/mocks/home/logos/venecia-color.svg",
      name: "Venecia Residencial",
      address: "Azcapotzalco, State of Mexico, Mexico",
      textButton: "View project",
      link: pagesContants.landingVeneciaES,
      image: "https://sicssalab.net/test-miraro/mocks/home/mapa/venecia.jpg",
    }
  },
  {
    name: "Mexico state",
    coordX: 400,
    coordY: 365,
    coordXMobile: 203,
    coordYMobile: 191,
    item: {
      logo: "https://sicssalab.net/test-miraro/mocks/home/logos/evia-color.svg",
      name: "Evia Interlomas",
      address: "Huixquilucan, State of Mexico,  Mexico<br />",
      link: pagesContants.landingEviaES,
      image: "https://sicssalab.net/test-miraro/mocks/home/mapa/evia.jpg",
      textButton: "View project"
    }
  },
];

export default itemsMapMock;