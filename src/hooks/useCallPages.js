import { useEffect } from "react";
import localStorageConstants from "../constants/localStorageConstants";
import storage from "../localstorage/storage";
import { useDispatch, useGlobalState } from "../store/StoreProvider";
import pageDataAction from "../actions/pageDataAction";

const useCallPages = () => {
    const { locale } = useGlobalState();
    const dispatch = useDispatch();
    //TODO posible error con server
    const navigation = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";

    const getSlug = () => {
        let pathLocale = (typeof window !== 'undefined') ? window.location?.pathname?.toLowerCase() : "/";
        //const pathSplit = pathLocale.replace("//", "/").split('/');
        //TODO obtener el slug
        let slug = "/";
        // if (pathSplit.length >= 3) {
        //     //TODO tercera posicion es path sin locale
        //     slug = pathLocale.replace("//", "/"); //TODO mejorar remplace todos
        //     slug = slug.replace(`/${locale}`, '');
        // }

        //TODO si inicia con un idioma no es el de default
        if (pathLocale.startsWith(`/${locale}`)) {
            //TODO tercera posicion es path sin locale
            slug = pathLocale.replace("//", "/"); //TODO mejorar remplace todos
            slug = slug.replace(`/${locale}`, '');
        }
        else {
            slug = pathLocale.substring(0, pathLocale.length);
            slug = slug === "" ? "/" : slug
        }
        return slug;
    }
    //TODO manda a llamar informacion por api
    //TODO si cambia el lenguaje cambia la url y debe recuperar el slug y mandarlo a la api nuevamente
    //TODO posiblemente blog tenga una carpeta diferente de llamado
    useEffect(() => {
        //TODO Inicializa el sitio y carga por default el local para traer las rutas
        let slug = getSlug();
        slug = slug === "/" ? slug : slug.substring(1, slug.length);

        const localStorageName = localStorageConstants.PAGE + `_${locale}_${slug}`;
        (typeof window !== 'undefined') && window.scrollTo({left: 0,top: 0,behavior: "instant"});
        //TODO teniendo el locale vamos a llamar por api las urls por idioma
        let auxResponse = storage.getLocalStorage(localStorageName);
        if (auxResponse === null) {
            pageDataAction.getPages({ locale: locale, slug: slug }, dispatch,
                (response) => {
                    //storage.setLocalStorage(localStorageName, response, 5);
                });
        }
        else {
            console.log("llamando paginas desde session", auxResponse)
            pageDataAction.update(auxResponse, dispatch);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, navigation]);
}

export default useCallPages;