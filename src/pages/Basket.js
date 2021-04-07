import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  clearBasket,
  removeBasketItem,
  plusBasketItem,
  minusBasketItem,
} from "../redux/actions/basket";

import { BasketItem } from "../components";

export default function Basket() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ basket }) => basket);

  const addedItems = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearBasket = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearBasket());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeBasketItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusBasketItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusBasketItem(id));
  };

  const onClickOrder = () => {
    console.log("ВАШ ЗАКАЗ", items);
  };

  return (
    <div className="content">
      <div className="content__box wrapper">
        <div className="content__header">
          <span className="content__title bttn bttn_active">Bag</span>

          <span className="content__delete-bttn bttn" onClick={onClearBasket}>
            {" "}
            Delete all{" "}
          </span>
        </div>

        <div className="content__bag grid">
          {totalCount ? (
            addedItems.map((item) => (
              <BasketItem
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                totalPrice={items[item.id].totalPrice}
                totalCount={items[item.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))
          ) : (
            <div className="content__clear-text">
              <h2 className="content__clear-title">your basket is empty</h2>
            </div>
          )}
        </div>

        <div className="content__pay-box">
          <div
            className="content__pay-bttn bttn bttn_active"
            onClick={onClickOrder}
          >
            Pay: {totalPrice}$
          </div>
        </div>
      </div>
    </div>
  );
}
