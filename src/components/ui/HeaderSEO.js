import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useGlobalState } from "../../store/StoreProvider";
import languageUtils from '../../utils/languageUtils';

const HeaderSEO = (props) => {
  const { locale, pageData } = useGlobalState();
  const domain = process.env.REACT_APP_DOMAIN;

  return (
    <Helmet>
      {pageData.isSuccess && pageData.metadata && (
        <>
          {pageData.metadata.metaTitle && (
            <>
              <title>{pageData.metadata.metaTitle}</title>
              <meta property="og:title" content={pageData.metadata.metaTitle} />
            </>
          )}
          {pageData.metadata.metaDescription && (
            <meta name="description" content={pageData.metadata.metaDescription} />
          )}
          {pageData.metadata.keywords && (
            <meta name="keywords" content={pageData.metadata.keywords} />
          )}
          {pageData.metadata.image && (
            <>
              <meta property="image" content={pageData.metadata.image} />
              <meta property="og:image" content={pageData.metadata.image} />
            </>
          )}
          {/* {pageData.metadata.follow && (

          )} */}
          {/* {pageData.metadata.sitename && (

          )} */}
          {/* {pageData.metadata.type && (

          )} */}
          <link rel="canonical" href={`${domain}${locale === languageUtils.defaultLocale
            ? ''
            : `/${locale}`}${pageData.slug === "/"
              ? '' : `/${pageData.slug}`}`} />
        </>
      )}
    </Helmet>
  );
};

export default HeaderSEO;
