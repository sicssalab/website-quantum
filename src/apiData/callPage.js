import pagesContants from "../constants/pagesContants";

const callPage = (locale, slug) => {
    let data = null;
    let typePage= "";

    switch(slug) {
        case pagesContants.proyectsES:
        case pagesContants.proyectsEN:
        case `/${locale}/${pagesContants.proyectsES}`:
        case `/${locale}/${pagesContants.proyectsEN}`:
        case `${locale}/${pagesContants.proyectsES}`:
        case `${locale}/${pagesContants.proyectsEN}`:
            typePage = "home-proyects";
            break;
        case pagesContants.landingSelvaEscondidaIIES:
        case `/${locale}/${pagesContants.landingSelvaEscondidaIIES}`:
        case `/${pagesContants.landingSelvaEscondidaIIES}`:
        case `${locale}/${pagesContants.landingSelvaEscondidaIIES}`:
        case `${pagesContants.landingSelvaEscondidaIIES}`:
            typePage = "landing-selvaEscondidaII";
            break;
        case pagesContants.landingSelvaEscondidaES:
        case `/${locale}/${pagesContants.landingSelvaEscondidaES}`:
        case `/${pagesContants.landingSelvaEscondidaES}`:
        case `${locale}/${pagesContants.landingSelvaEscondidaES}`:
        case `${pagesContants.landingSelvaEscondidaES}`:
            typePage = "landing-selvaEscondida";
            break;
        case pagesContants.landingEviaES:
        case `/${locale}/${pagesContants.landingEviaES}`:
        case `/${pagesContants.landingEviaES}`:
        case `${locale}/${pagesContants.landingEviaES}`:
        case `${pagesContants.landingEviaES}`:
            typePage = "landing-evia";
            break;
        case pagesContants.landingNaayES:
        case `/${locale}/${pagesContants.landingNaayES}`:
        case `/${pagesContants.landingNaayES}`:
        case `${locale}/${pagesContants.landingNaayES}`:
        case `${pagesContants.landingNaayES}`:
            typePage = "landing-naay";
            break;
        case pagesContants.landingPalmasES:
        case `/${locale}/${pagesContants.landingPalmasES}`:
        case `/${pagesContants.landingPalmasES}`:
        case `${locale}/${pagesContants.landingPalmasES}`:
        case `${pagesContants.landingPalmasES}`:
            typePage = "landing-palmas";
            break;
        case pagesContants.landingDelMarES:
        case `/${locale}/${pagesContants.landingDelMarES}`:
        case `/${pagesContants.landingDelMarES}`:
        case `${locale}/${pagesContants.landingDelMarES}`:
        case `${pagesContants.landingDelMarES}`:
            typePage = "landing-del-mar";
            break;
        case pagesContants.landingLuumES:
        case `/${locale}/${pagesContants.landingLuumES}`:
        case `/${pagesContants.landingLuumES}`:
        case `${locale}/${pagesContants.landingLuumES}`:
        case `${pagesContants.landingLuumES}`:
            typePage = "landing-luum";
            break;
        case pagesContants.landingKaanaES:
        case `/${locale}/${pagesContants.landingKaanaES}`:
        case `/${pagesContants.landingKaanaES}`:
        case `${locale}/${pagesContants.landingKaanaES}`:
        case `${pagesContants.landingKaanaES}`:
            typePage = "landing-kaana";
            break;
        case pagesContants.landingVeneciaES:
        case `/${locale}/${pagesContants.landingVeneciaES}`:
        case `/${pagesContants.landingVeneciaES}`:
        case `${locale}/${pagesContants.landingVeneciaES}`:
        case `${pagesContants.landingVeneciaES}`:
            typePage = "landing-venecia";
            break;
        case pagesContants.nosotrosES:
        case pagesContants.nosotrosEN:
        case `/${locale}/${pagesContants.nosotrosES}`:
        case `/${locale}/${pagesContants.nosotrosEN}`:
        case `${locale}/${pagesContants.nosotrosES}`:
        case `${locale}/${pagesContants.nosotrosEN}`:
            typePage = "nosotros";
            break;
        case pagesContants.contactoES:
        case pagesContants.contactoEN:
        case `/${locale}/${pagesContants.contactoES}`:
        case `/${locale}/${pagesContants.contactoEN}`:
        case `${locale}/${pagesContants.contactoES}`:
        case `${locale}/${pagesContants.contactoEN}`:
            typePage = "contacto";
            break;
        case pagesContants.terminosCondicionesES:
        case pagesContants.terminosCondicionesEN:
        case `/${locale}/${pagesContants.terminosCondicionesES}`:
        case `/${locale}/${pagesContants.terminosCondicionesEN}`:
        case `${locale}/${pagesContants.terminosCondicionesES}`:
        case `${locale}/${pagesContants.terminosCondicionesEN}`:
            typePage = "termino-condiciones";
            break;
        case pagesContants.avisoPrivacidadES:
        case pagesContants.avisoPrivacidadEN:
        case `/${locale}/${pagesContants.avisoPrivacidadES}`:
        case `/${locale}/${pagesContants.avisoPrivacidadEN}`:
        case `${locale}/${pagesContants.avisoPrivacidadES}`:
        case `${locale}/${pagesContants.avisoPrivacidadEN}`:
            typePage = "aviso-privacidad";
            break;
        case pagesContants.blogES:
        case `/${locale}/${pagesContants.blogES}`:
        case `${locale}/${pagesContants.blogES}`:
            typePage = "blog";
            break;
        case pagesContants.blogCategoriasES:
        case pagesContants.blogCategoriasEN:
        case `/${locale}/${pagesContants.blogCategoriasES}`:
        case `/${locale}/${pagesContants.blogCategoriasEN}`:
        case `${locale}/${pagesContants.blogCategoriasES}`:
        case `${locale}/${pagesContants.blogCategoriasEN}`:
            typePage = "home-blog-categorias";
            break;
        case `${pagesContants.blogES}/blog-test`:
        case `blog-test`:
        case `/${locale}/${pagesContants.blogES}/blog-test`:
            typePage = "blog-preview";
            break;
        case pagesContants.prensaES:
        case pagesContants.prensaEN:
        case `/${locale}/${pagesContants.prensaES}`:
        case `/${locale}/${pagesContants.prensaEN}`:
        case `${locale}/${pagesContants.prensaES}`:
        case `${locale}/${pagesContants.prensaEN}`:
            typePage = "prensa";
            break;
        case "":
        case "/":
        case `/${locale}`:
        case `/${locale}/`:
        case `${locale}`:
        case `${locale}/`:
            typePage = "home";
            break;
        default:
            typePage = slug;
    }

    try {
        data = require(`./data-${typePage}-${locale.toLowerCase()}.js`);
    }
    catch(_) {
        console.error(_)
        data = null;
    }

    return data ? data.default: null;
}

export default callPage;