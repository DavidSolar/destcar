const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        changedInput: false,
      };
    case 'SET_DESTINY':
      return {
        ...state,
        destiny: [action.payload],
      };
    case 'SET_ORIGIN':
      return {
        ...state,
        origin: [action.payload],
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_ROUTE':
      return {
        ...state,
        route: action.payload,
      };
    case 'DELETE_ROUTE':
      return {
        ...state,
        route: [],
        routeVisible: false,
        changedInput: false,
      };
    case 'SET_ROUTE':
      return {
        ...state,
        from: action.payload.data.startLocation,
        to: action.payload.data.endLocation,
        money: action.payload.data.money,
        time: parseFloat(action.payload.data.time / 60).toFixed(2),
        distance: parseFloat(action.payload.data.distance / 1000).toFixed(2),
        routeVisible: true,
        changedInput: true,
        /*route: [
          { lat: 19.42672619, lng: -99.1718706 },
          { lat: 19.4428928, lng: -99.1718706 },
        ],
        */
        route: action.payload.data.route,
        polylines: action.payload.data.polylines,
        bounds: action.payload.data.bounds,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
