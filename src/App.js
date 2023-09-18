import React from "react";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import { Routes, Route, useLocation } from "react-router-dom";
import languageMenuMock from "./mocks/languageMenuMock";
import SlugPage from "./pages/SlugPage";
import "./theme/boostrap-theme.scss";
import "./theme/main.scss";
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
import NotfoundPage from "./pages/NotfoundPage";
import pagesContants from "./constants/pagesContants";
function App(props) {
  const { ssrRoutesData } = props;
  const locales = languageMenuMock;
  const { locale, routesData } = useGlobalState();
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    let pathLocale =
      typeof window !== "undefined"
        ? window.location?.pathname?.toLowerCase()
        : "/";
    let auxLocale = languageUtils.getLocale(pathLocale);

    localeAction.updateLocale(auxLocale, dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const updateRoutes = async (auxLocale) => {
      const localStorageRoutes = `${localStorageConstants.ROUTE}_${auxLocale}`;
      let auxRoutes = await storage.getLocalStorage(localStorageRoutes);
      if (auxRoutes === null) {
        routesAction.getRoutes({ locale: auxLocale }, dispatch, (response) => {
          storage.setLocalStorage(localStorageRoutes, response, 120);
        });
      } else {
        routesAction.update(auxRoutes, dispatch);
      }
    };
    updateRoutes(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    process.env.REACT_APP_GOOGLE_TRAKING_ID &&
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRAKING_ID);
    if (process.env.REACT_APP_GOOGLE_TAG_MANAGER) {
      const tagManagerArgs = {
        gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER,
      };

      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  const auxRoutesData =
    ssrRoutesData?.id > 0 && ssrRoutesData.locale === locale
      ? ssrRoutesData
      : routesData;
  useEffect(() => {
    let auxLocale = languageUtils.getLocale(location.pathname.toLowerCase());
    if (
      auxRoutesData !== undefined &&
      auxRoutesData.locale !== undefined &&
      auxRoutesData.locale !== auxLocale
    ) {
      localeAction.updateLocale(auxLocale, dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, auxRoutesData]);

  return (
    <IntlProvider locale={locale} messages={languages[locale]}>
      <Helmet htmlAttributes={{ lang: locale }} />
      <Routes>
        {auxRoutesData.isSuccess &&
          auxRoutesData.data.map((item, i) => {
            return (
              <Route
                key={i}
                path={languageUtils.getPathForRouteLinkLocale(
                  locale,
                  item.slug
                )}
                element={<SlugPage locales={locales} />}
              />
            );
        })}
        <Route path={"productos"}
          element={<SlugPage locales={locales} />}
        />
        <Route path={pagesContants.ametek}
          element={<SlugPage locales={locales} />}
        />
        <Route path={"/blog/:id"} element={<BlogPage locales={locales} />} />
        <Route path={"en/blog/:id"} element={<BlogPage locales={locales} />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </IntlProvider>
  );
}

export default App;
