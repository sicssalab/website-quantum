import types from "../constants/reducers/pageDataConstants";
import callPage from "../apiData/callPage";

//TODO: get
const get = (pageData) => {
  pageData.isFetching = false;
  pageData.isSuccess = true;
  pageData.isError = false;
  return { type: types.PAGE_DATA, pageData };
};

const fetching = () => {
  const pageData = {
    isFetching: true,
    isSuccess: false,
    isError: false,
  };
  return { type: types.PAGE_DATA_FETCHING, pageData };
};

const getError = () => {
  const pageData = {
    isFetching: false,
    isSuccess: false,
    isError: true,
  };
  return { type: types.PAGE_DATA_ERROR, pageData };
};

//TODO Get ITEMS with context and use Ditpatch
const getPages = async (request, dispatch, onSuccess, onError) => {
  const { locale, slug } = request;
  //const language = localeUtils.handleLanguage(locale);
  dispatch(fetching());
  console.log(`Slug:`)
  console.log(slug)
  console.log(`${process.env.REACT_APP_DOMAIN}/public/json/data-${slug.toLowerCase()}-${locale}.json`)
  await fetch(`${process.env.REACT_APP_DOMAIN}/public/json/data-${slug.toLowerCase()}-${locale}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Something went wrong.");
    })
    .then((data) => {
      dispatch(get(data));
      const auxResponse = {...data};
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess(auxResponse);
      }
    })
    .catch((ex) => {
      dispatch(getError());
      if (onError && typeof onError === "function") {
        onError(ex);
      }
    });
  //getPagesMock(request, dispatch, onSuccess, onError)
};

//TODO FAKE, REPLICAR EL RESPONSE AUX AL TRAER INFO
const getPagesMock = async (request, dispatch, onSuccess, onError) => {
  const { locale, slug } = request;
  dispatch(fetching());

  try {
    const response = await callPage(locale, slug.toLowerCase());
    const auxResponse = {...response};
    dispatch(get(response));
  
    if (onSuccess && typeof onSuccess === "function") {
      onSuccess(auxResponse);
    }
  }
  catch(_ex) {
    dispatch(getError());
    if (onError && typeof onError === "function") {
      onError();
    }
  }
};

const update = async (response, dispatch) => {
  dispatch(fetching());
  dispatch(get(response));
}

const pageDataAction = {
  getPages,
  getPagesMock,
  update
};
export default pageDataAction;
