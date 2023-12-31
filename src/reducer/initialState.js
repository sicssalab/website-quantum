import languageUtils from "../utils/languageUtils";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    locale: languageUtils.defaultLocale,
    routesData: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        header: {
            logo: {
                src: null,
                alt: ""
            },
            menu: []
        },
        footer: {
            logo: {
                src: null,
                alt: ""
            }
        }
    },
    pageData: {
        isFetching: false,
        isSuccess: false,
        isError: false,
    }
}