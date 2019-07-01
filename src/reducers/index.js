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

    // case "ITEM_ADD_TO_CART":
    //   const id = action.payload;
    //   const item = state.menu.find(item => item.id === id);
    //   const newItem = {
    //     title: item.title,
    //     price: item.price,
    //     url: item.url,
    //     id: item.id,
    //     counter: 0
    //   };
    //   const double = state.items.some(item => item.id === id);
    //   if (double) {
    //     state.items = state.items.map(item => {
    //       if (item.id === id) item.counter++;
    //       const itemIndex = state.items.findIndex(item => item.id === id);
    //       return {
    //         ...state,
    //         items: [
    //           ...state.items.slice(0, itemIndex),
    //           ...state.items.slice(itemIndex + 1)
    //         ]
    //       };
    //     });
    //   }
    //   return {
    //     ...state,
    //     items: [...state.items, newItem]
    //   };

    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        counter: 0
      };
      // const double = state.items.find(item => item.id === id);
      // console.log(double);
      // if (!double) {
      //   return {
      //     ...state,
      //     items: [...state.items, newItem],
      //     total: +item.price
      //   };
      // } else
      return {
        ...state,
        items: [...state.items, newItem],
        total: state.total + item.price
      };

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === idx);
      const itemX = state.menu.find(item => item.id === idx);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        total: state.total - itemX.price
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
