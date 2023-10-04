import { useEffect } from "react";
import localStorageConstants from "../constants/localStorageConstants";
import storage from "../localstorage/storage";
import { useDispatch, useGlobalState } from "../store/StoreProvider";
import pageDataAction from "../actions/pageDataAction";

const useCallPages = () => {
    const { locale } = useGlobalState();
    const dispatch = useDispatch();

    const navigation = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";
    const removeSlash = (slug) => {
        if (slug.startsWith(`/`))
            slug = slug.replace(`/`, '');

        if (slug.endsWith(`/`))
            slug = slug.replace(/[/]/g, '')

        return slug;
    }
    const getSlug = () => {
        let pathLocale = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";
        let slug = "/";

        if (pathLocale.startsWith(`/${locale}`)) {
            slug = pathLocale.replace(`/${locale}`, '');
            slug = removeSlash(slug);
        }
        else slug = removeSlash(pathLocale);

        slug = slug === "" ? "/" : slug;
        return slug;
    }
    useEffect(() => {
        let slug = getSlug();
        if(slug === "/") slug = "home";
        const localStorageName = localStorageConstants.PAGE + `_${locale}_${slug}`;
        (typeof window !== 'undefined') && window.scrollTo({left: 0,top: 0,behavior: "instant"});
        let auxResponse = storage.getLocalStorage(localStorageName);
        if (auxResponse === null) {
            pageDataAction.getPages({ locale: locale, slug: slug }, dispatch,
                (response) => {
                    //storage.setLocalStorage(localStorageName, response, 5);
                });
        }
        else {
            pageDataAction.update(auxResponse, dispatch);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, navigation]);
}

export default useCallPages;