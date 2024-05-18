import types from "../constants/reducers/pageDataConstants";

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

  dispatch(fetching());
  await fetch(`${process.env.REACT_APP_DOMAIN}/public2/json/data-${slug.toLowerCase()}-${locale}.json`, {
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
};

const update = async (response, dispatch) => {
  dispatch(fetching());
  dispatch(get(response));
}

const pageDataAction = {
  getPages,
  update
};
export default pageDataAction;
