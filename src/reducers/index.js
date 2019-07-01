const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id
      };
      const double = state.items.find(item => item.id === id);
      console.log(double);
      if (!double) {
        return {
          ...state,
          items: [...state.items, newItem]
        };
      } else
        return {
          ...state,
          items: [...(state.items.find(item => item.id === id).counter = +1)]
        };

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      };
    case "MENU_ERROR":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
