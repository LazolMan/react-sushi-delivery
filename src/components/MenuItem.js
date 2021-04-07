import React from "react";

export default function MenuItem({
  id,
  name,
  desc,
  imageUrl,
  price,
  onClickAddItem,
  addedCount,
}) {
  const onAddItem = () => {
    const obj = {
      id,
      name,
      desc,
      imageUrl,
      price,
    };
    onClickAddItem(obj);
  };

  return (
    <div className="main__menu-item menu-item grid__item">
      <img src={imageUrl} alt="menu-item" className="img" />

      <div className="menu-item__text">
        <div className="menu-item__header">
          <h3 className="menu-item__title">{name}</h3>

          <span className="menu-item__cost"> $ {price} </span>
        </div>

        <p className="menu-item__desc">{desc}</p>

        <div className="menu-item__bttn bttn" onClick={onAddItem}>
          <span className="menu-item__buy-text">Add to bag</span>
          {addedCount && (
            <span className="menu-item__order-text">Order: {addedCount}</span>
          )}
        </div>
      </div>
    </div>
  );
}
