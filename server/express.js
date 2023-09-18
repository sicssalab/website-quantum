import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import StoreProvider from "../src/store/StoreProvider";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/App";
import callPage from "../src/apiData/callPage";
import callRouterPage from "../src/apiData";
import languageUtils from "../src/utils/languageUtils";

import serverUtils from "../src/utils/serverUtils";
require('dotenv').config();

const express = require("express");
const fs = require('fs');
const path = require("path");
const React = require('react');

const app = express();
const helmetContext = {};
app.use("/src/assets", express.static(path.join(__dirname, "src/assets")));
app.use("/public", express.static(path.join(__dirname, "../dist/public")));

app.get(/\.(txt)$/, express.static(path.resolve(__dirname, "../dist/public")));
app.get(/\.(js|css|map|ico|svg|webp|webm|otf|txt|jpg|jpeg|gif|png)$/, express.static(path.resolve(__dirname, "../dist")));

const renderHeader = (html, optionsPage, locale) => {
  const meta = optionsPage.metadata;
  const canonical = meta ? serverUtils.getCanonical(process.env.REACT_APP_DOMAIN, locale, "/"+optionsPage.slug) : null;
  const title = meta.metaTitle ? meta.metaTitle : "";
  const description = meta.metaDescription ? meta.metaDescription : "";
  const keywords = meta.keywords ? meta.keywords : "";
  const imageLink = meta.image ? meta.image : null;
  const follow = meta.follow ? meta.follow : null;

  html = html.replace('<title></title>', `<title>${title}</title>`);
  html = html.replace('<meta name="description" content="" data-rh="true">', `<meta name="description" content="${description}" data-rh="true">`);
  html = html.replace('<meta name="keywords" content="" data-rh="true">', `<meta name="keywords" content="${keywords}" data-rh="true">`);
  html = html.replace('<meta name="image" content="" data-rh="true">', `<meta name="image" content="${imageLink}" data-rh="true">`);
  html = html.replace('<meta name="og:title" content="" data-rh="true">', `<meta name="og:title" content="${title}" data-rh="true">`);
  html = html.replace('<meta name="og:image" content="" data-rh="true">', `<meta name="og:image" content="${imageLink}" data-rh="true">`);
  html = html.replace('<!-- CANONICAL -->', canonical ? `<link rel="canonical" href="${canonical}" data-rh="true" />`: '');
  html = html.replace('<!-- FOLLOW -->', follow ? `<meta name="robots" content="${follow}" data-rh="true" />`: '');

  return html;
}

app.get("*", async (req, res) => {
  const context = {};
  const locale = languageUtils.getLocale(req.url)

  let slugPage = req.params['0'].toLowerCase();
  slugPage = slugPage.indexOf("/") === 0 ? slugPage.replace("/","") : slugPage;

  let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
    encoding: 'utf8'
  });
  const dataRouter = await callRouterPage(locale);

  const appHTML = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StoreProvider>
        <StaticRouter location={req.url} context={context}>
          <App ssrRoutesData={dataRouter} />
        </StaticRouter>
        <script 
          dangerouslySetInnerHTML={{
            __html: `window.__data__ = ${JSON.stringify(dataRouter)}`
          }}
        />
      </StoreProvider>
    </HelmetProvider>
  );

  indexHTML = indexHTML.replace('lang="es">', `lang="${locale}">`);

  if(req.url && (
    req.url.search(".otf") === -1
    && req.url.search(".ico") === -1
    && req.url.search(".webp") === -1
    && req.url.search(".png") === -1
    )) {
      const responseOptionsPage = callPage(locale, slugPage)
      if(responseOptionsPage && responseOptionsPage.metadata) {
        indexHTML = renderHeader(indexHTML, responseOptionsPage, locale);
      }
  }

  indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

app.listen(process.env.REACT_APP_PORT || 3000, () => {
  console.log(`server on port http://localhost:${process.env.REACT_APP_PORT ? process.env.REACT_APP_PORT : 3000}`);
});