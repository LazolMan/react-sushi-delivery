import React from "react";

import trashSvg from "../assets/img/trash.svg";

export default function BasketItem({
  id,
  name,
  imageUrl,
  totalPrice,
  totalCount,
  onRemove,
  onMinus,
  onPlus,
}) {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="bag-item grid__item">
      <img
        src={imageUrl}
        alt="bag-item"
        className="img"
      />

      <div className="bag-item__text">
        <h3 className="bag-item__title">{name}</h3>

        <div className="bag-item__bttns">
          <span className="bag-item__delete" onClick={handleMinusItem}>
            -
          </span>
          <span className="bag-item__count">{totalCount}</span>
          <span className="bag-item__add" onClick={handlePlusItem}>
            +
          </span>
        </div>

        <span className="bag-item__cost"> {totalPrice.toFixed(2)} </span>

        <img
          src={trashSvg}
          alt="bag"
          className="bag-item__trash"
          onClick={handleRemoveClick}
        />
      </div>
    </div>
  );
}
