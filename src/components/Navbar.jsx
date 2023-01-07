import { BurgerMenu } from "../assets/navbar_svgs/BurgerMenu";
import { SearchIcon } from "../assets/navbar_svgs/SearchIcon";
import { DropDownIcon } from "../assets/navbar_svgs/DropDownIcon";
import { ShopCartIcon } from "../assets/navbar_svgs/ShopCartIcon";
import { ProfileIcon } from "../assets/navbar_svgs/ProfileIcon";

import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="top_nav">
        <div className="icons_container">
          <BurgerMenu />
          <SearchIcon />
        </div>
        <h1 className="nav_title">The golden Fleece</h1>
        <div className="icons_container flex_end">
          <div className="thing_container">
            $
            <DropDownIcon />
          </div>

          <div className="thing_container">
            ENG
            <DropDownIcon />
          </div>

          <ShopCartIcon />
          <ProfileIcon />
        </div>
      </div>

      <div className="categories">
        <p className="active">Stock</p>
        <p>Fragrances</p>
        <p>Presents</p>
        <p>House</p>
        <p>Jewelry</p>
        <p>Clock</p>
        <p>Wedding decorations</p>
        <p>Leather products</p>
      </div>
    </nav>
  );
};
