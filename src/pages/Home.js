import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, MenuItem } from "../components";

import { setCategory } from "../redux/actions/categories";
import { fetchMenu } from "../redux/actions/menu";
import { addItemToBasket } from "../redux/actions/basket";

const categoryNames = [
  "Ramen",
  "Appetizers",
  "Soup & Salad",
  "Rolls",
  "Lunch",
  "Drinks",
];

export default function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ menu }) => menu.items);
  const basketItems = useSelector(({ basket }) => basket.items);
  const isLoaded = useSelector(({ menu }) => menu.isLoaded);
  const { category } = useSelector(({ categories }) => categories);

  React.useEffect(() => {
    dispatch(fetchMenu(category));
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const handleAddItemToBasket = (obj) => {
    dispatch({
      type: "ADD_ITEM_BASKET",
      payload: obj,
    });
  };

  return (
    <div className="main">
      <div className="main__box wrapper">
        <Categories
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />

        <div className="main__menu grid">
          {isLoaded &&
            items.map((item) => (
              <MenuItem
                onClickAddItem={handleAddItemToBasket}
                addedCount={
                  basketItems[item.id] && basketItems[item.id].items.length
                }
                {...item}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
