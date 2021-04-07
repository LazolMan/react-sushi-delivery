import React from "react";

export default function Categories({ items, activeCategory, onClickCategory }) {
  return (
    <ul className="main__categories categories">
      <li
        className={
          activeCategory === null
            ? "categories__item categories__item_active bttn bttn_active"
            : "categories__item bttn"
        }
        onClick={() => onClickCategory(null)}
      >
        All
      </li>

      {items.map((name, index) => (
        <li
          className={
            activeCategory === index
              ? "categories__item categories__item_active bttn bttn_active"
              : "categories__item bttn"
          }
          onClick={() => onClickCategory(index)}
          key={`${name}_${index}`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
