import React, { useState } from "react";
import classes from "./Header.module.css";
import flag from "../../images/flag.png";
import Menu from "../Menu/Menu";
import {
  AiFillBug,
  AiFillBulb,
  AiFillApple,
  AiFillAudio,
  AiFillDollarCircle,
} from "react-icons/ai";
import { IoBusinessSharp, IoBusOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = (props) => {
  const setActive = ({ isActive }) =>
    isActive ? classes.active : classes.item;

  const [menuActive, setMenuActive] = useState(true);
  const items = [
    {
      value: "Real Estate",
      href: "/main",
      icon: <IoBusinessSharp size="30px" />,
    },
    { value: "Transport", href: "/main", icon: <IoBusOutline size="30px" /> },
    { value: "Animals", href: "/main", icon: <AiFillBug size="30px" /> },
    {
      value: "Hobby and sport",
      href: "/main",
      icon: <AiFillDollarCircle size="30px" />,
    },
    {
      value: "Food and beverages",
      href: "/main",
      icon: <AiFillApple size="30px" />,
    },
    { value: "Services", href: "/main", icon: <AiFillAudio size="30px" /> },
    { value: "Other", href: "/main", icon: <AiFillBulb size="30px" /> },
  ];
  return (
    <>
      <div className={classes.header}>
        <Logo />
        <div>
          <input type="text" placeholder="Search" className={classes.search} />
        </div>
        <div>
          <button className={classes.button1}>My Page</button>
          <button className={classes.button2}>Add Post</button>
        </div>
        <div>
          <img src={flag} alt="flag" className={classes.flag} />
        </div>
      </div>
      <div className={classes.links}>
        <nav className={classes.links}>
          <div
            className={classes.burger}
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <div>
              <span />
              <p>All</p>
            </div>
          </div>
          <NavLink to={"/Work"} className={setActive}>
            Work
          </NavLink>
          <NavLink to={"/Services"} className={setActive}>
            Services
          </NavLink>
          <NavLink to={"/RealEstate"} className={setActive}>
            Real Estate
          </NavLink>
          <NavLink to={"/Transport"} className={setActive}>
            Transport
          </NavLink>
          <NavLink to={"/electronics"} className={setActive}>
            electronics
          </NavLink>
          <NavLink to={"/Fashion"} className={setActive}>
            Fashion and style
          </NavLink>
          <NavLink to={"/Home"} className={setActive}>
            Home and garden
          </NavLink>
          <NavLink to={"/Household"} className={setActive}>
            Household Appliances
          </NavLink>
        </nav>
      </div>
      <div>
        <Menu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          header="Menu"
          items={items}
        />
      </div>
    </>
  );
};

export default Header;
