import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import bagSvg from "../assets/img/cart.svg";

export default function Header() {
  const { totalPrice, totalCount } = useSelector(({ basket }) => basket);

  return (
    <header className="header">
      <div className="header__box wrapper">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            {" "}
            Jin Ramen{" "}
          </Link>
        </div>

        <div className="header__bag">
          <span className="header__total-cost">
            {totalCount} | {totalPrice.toFixed(2)}$
          </span>

          <Link to="/bag" className="header__bag-link">
            <img src={bagSvg} alt="bag" className="header__bag-img" />
          </Link>
        </div>
      </div>
    </header>
  );
}
