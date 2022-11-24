import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [state, disptach] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="image processing"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">hello Deepak</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to={"/checkout"}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
