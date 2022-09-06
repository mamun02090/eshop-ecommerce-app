import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";
import classes from "../styles/Menu.module.css";
import "../styles/style.css";
import Headings from "./Headings";
export default function Menu({ className }) {
  const handleClick = (text) => {
    console.log(text);
  };
  return (
    <div className="cat-nav">
      <Headings heading="Catagories" />
      <nav className={`${classes.menu_nav} ${className}`}>
        <NavLink to="/" className={classes.items}>
          <MenuItems handleClick={handleClick} text="All" />
        </NavLink>
        <NavLink to="/gadgets" className={classes.items}>
          <MenuItems handleClick={handleClick} text="Gadgets" />
        </NavLink>
        <NavLink to="/shirts" className={classes.items}>
          <MenuItems handleClick={handleClick} text="Shirts" />
        </NavLink>
        <NavLink to="/groceries" className={classes.items}>
          <MenuItems handleClick={handleClick} text="Groceries" />
        </NavLink>
        <NavLink to="/books" className={classes.items}>
          <MenuItems handleClick={handleClick} text="Books" />
        </NavLink>
      </nav>
    </div>
  );
}
