const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  total: 0
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
        id: item.id,
        counter: 1,
        total: item.price
      };
      const double = state.items.find(item => item.id === id);
      if (!double) {
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + item.price
        };
      } else {
        const items = [...state.items];
        double.counter++;
        double.total = double.price * double.counter;
        return {
          ...state,
          items,
          total: state.total + item.price
        };
      }

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      const itemX = state.items.find(item => item.id === idx);
      console.log(itemX);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        total: state.total - itemX.total
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
