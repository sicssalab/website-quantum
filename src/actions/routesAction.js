import types from "../constants/reducers/routesDataConstants";
import apiData from "../apiData";

//TODO: get
const get = (routesData) => {
  routesData.isFetching = false;
  routesData.isSuccess = true;
  routesData.isError = false;
  return { type: types.ROUTES_DATA, routesData };
};
const fetching = () => {
  const routesData = {
    isFetching: true,
    isSuccess: false,
    isError: false,
  };
  return { type: types.ROUTES_DATA_FETCHING, routesData };
};
const getError = () => {
  const routesData = {
    isFetching: false,
    isSuccess: false,
    isError: true,
  };
  return { type: types.ROUTES_DATA_ERROR, routesData };
};

//TODO Get ITEMS with context and use Ditpatch
const getRoutes = async (request, dispatch, onSuccess, onError) => {
  // const { locale, authSession, ...rest } = request;
  // //const language = localeUtils.handleLanguage(locale);
  // dispatch(fetching());
  // await fetch(`${process.env.REACT_APP_API}hotel/detail`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     //Authorization: `Bearer ${authSession.token}`,
  //   },
  //   body: JSON.stringify({ ...rest, }),
  // })
  //   .then((response) => {
  //     if (response.ok) return response.json();
  //     throw new Error("Something went wrong.");
  //   })
  //   .then((data) => {
  //     dispatch(get(data));
  //     const auxResponse = {...data};
  //     if (onSuccess && typeof onSuccess === "function") {
  //       onSuccess(auxResponse);
  //     }
  //   })
  //   .catch((ex) => {
  //     dispatch(getError());
  //     if (onError && typeof onError === "function") {
  //       onError(ex);
  //     }
  //   });
  getRoutesMock(request, dispatch, onSuccess, onError)
};
//TODO FAKE, REPLICAR EL RESPONSE AUX AL TRAER INFO
const getRoutesMock = async (request, dispatch, onSuccess, _onError) => {
  const { locale } = request;
  dispatch(fetching());
  const response = await apiData(locale);
  const auxResponse = {...response};
  dispatch(get(response));

  if (onSuccess && typeof onSuccess === "function") {
    onSuccess(auxResponse);
  }
};

const update = async (response, dispatch) => {
  dispatch(get(response));
}

const routesAction = {
  getRoutes,
  getRoutesMock,
  update
};
export default routesAction;
