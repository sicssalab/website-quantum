import { useEffect } from "react";
import localStorageConstants from "../constants/localStorageConstants";
import storage from "../localstorage/storage";
import { useDispatch, useGlobalState } from "../store/StoreProvider";
import pageDataAction from "../actions/pageDataAction";

const useCallBlogPages = (idSlug) => {
    const { locale } = useGlobalState();
    const dispatch = useDispatch();
    //TODO posible error con server
    const navigation = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";

    //TODO manda a llamar informacion por api
    //TODO si cambia el lenguaje cambia la url y debe recuperar el slug y mandarlo a la api nuevamente
    //TODO posiblemente blog tenga una carpeta diferente de llamado
    useEffect(() => {
        const localStorageName = localStorageConstants.PAGE + `_${locale}_BLOG_PREVIEW_${idSlug}`;
        (typeof window !== 'undefined') && window.scrollTo({left: 0,top: 0,behavior: "instant"});
        //TODO teniendo el locale vamos a llamar por api las urls por idioma
        let auxResponse = storage.getLocalStorage(localStorageName);
        if (auxResponse === null) {
            pageDataAction.getBlogPages({ locale: locale, slug: idSlug }, dispatch,
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

export default useCallBlogPages;