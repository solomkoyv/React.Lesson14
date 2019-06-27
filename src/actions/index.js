const menuLoaded = newMenu => {
  return {
    menu: "MENU_LOADED",
    payload: newMenu
  };
};

export { menuLoaded };
