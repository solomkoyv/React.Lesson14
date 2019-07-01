import React from "react";
import "./menu-list-item.scss";

const MenuListItem = ({ menuItem, onAddToCart }) => {
  const { title, price, url, category } = menuItem;
  const salad =
    category === "salads" ? (
      <img
        src="https://image.flaticon.com/icons/png/128/135/135637.png"
        alt="salad"
      />
    ) : null;
  const pizza =
    category === "pizza" ? (
      <img
        src="https://image.flaticon.com/icons/png/128/135/135646.png"
        alt="pizza"
      />
    ) : null;
  const meat =
    category === "meat" ? (
      <img
        src="https://image.flaticon.com/icons/png/128/1134/1134447.png"
        alt="meat"
      />
    ) : null;
  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title} />
      <div className="menu__category">
        Category:{" "}
        <span>
          {salad}
          {pizza}
          {meat}
        </span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button onClick={() => onAddToCart()} className="menu__btn">
        Add to cart
      </button>
    </li>
  );
};

export default MenuListItem;
