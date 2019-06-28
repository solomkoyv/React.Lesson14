const initialState = {
  menu: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "MENU_LOADED":
      return {
        menu: action.payload,
        loading: false
      };
    case "MENU_REQUESTED":
      return {
        menu: state.menu,
        loading: true
      };
    case "MENU_ERROR":
      return {
        menu: state.menu,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
