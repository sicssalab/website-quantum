import React from "react";
import { Routes, Route } from "react-router-dom";
import languageMenuMock from "./mocks/languageMenuMock";
import SlugPage from "./pages/SlugPage";
import "./theme/boostrap-theme.scss";
import "./theme/main.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
//import "aos/dist/aos.css";
import { useDispatch, useGlobalState } from "./store/StoreProvider";
import { useEffect } from "react";
import localeAction from "./actions/localeAction";
import languages from "./languages";
import { IntlProvider } from "react-intl";
import languageUtils from "./utils/languageUtils";
import routesAction from "./actions/routesAction";
import storage from "./localstorage/storage";
import localStorageConstants from "./constants/localStorageConstants";
import { Helmet } from "react-helmet-async";
import BlogPage from "./pages/blog/BlogPage";

function App() {
  const locales = languageMenuMock;
  const { locale, routesData } = useGlobalState();
  const dispatch = useDispatch();

  const updateRoutes = (auxLocale) => {
    //TODO teniendo el locale vamos a llamar por api las urls por idioma
    const localStorageRoutes = `${localStorageConstants.ROUTE}_${auxLocale}`;
    let auxRoutes = storage.getLocalStorage(localStorageRoutes);
    if (auxRoutes === null) {
      routesAction.getRoutes({ locale: auxLocale }, dispatch,
        (response) => {
          storage.setLocalStorage(localStorageRoutes, response, 5);
        });
    }
    else {
      routesAction.update(auxRoutes, dispatch);
    }
  }

  useEffect(() => {
    //TODO Inicializa el sitio y carga por default el local para traer las rutas
    let pathLocale = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";
    let auxLocale = languageUtils.getLocale(pathLocale);

    //TODO actualiza el local del sitio
    localeAction.updateLocale(auxLocale, dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //TODO si cambia el lenguaje hay que volver a pedir a la api el listado de paginas
    updateRoutes(locale)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={languages[locale]}>
      {/* //TODO desde el server hacer el primer llamado a las rutas por local
        //TODO para tenerlas precargadas
        */}
      <Helmet htmlAttributes={{ lang: locale }} />
      <Routes>
        {routesData.isSuccess && (
          routesData.data.map((item, i) => {
            //TODO revisar proceso entrando a blogs
            return (
              <Route
                key={i}
                path={languageUtils.getPathForRouteLinkLocale(locale, item.slug)}
                element={
                  <SlugPage
                    locales={locales}
                  />
                }
              />
            );
          })
        )}
        <Route
          path={"/blog/:id"}
          element={
            <BlogPage
              locales={locales}
            />
          }
        />
        <Route
          path={"en/blog/:id"}
          element={
            <BlogPage
              locales={locales}
            />
          }
        />
        {/* <Route
          path="/"
          element={
            <SlugPage
              locales={locales}
            />
          }
        /> */}
        {/* //TODO pagina que no existe */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </IntlProvider>
  );
}

export default App;
