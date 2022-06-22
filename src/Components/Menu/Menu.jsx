
import React from "react";
import classes from "./Menu.module.css";
const Menu = (props) => {
  return (
    <div className={props.menuActive?classes.menu :  classes.active} onClick={(e)=>{
      e.setMenuActive(false)
    }}>
      <div className={classes.blur} />
      <div className={classes.menu__content} onClick={(e)=>e.stopPropagation()}>
        <div className={classes.menu__header}>{props.header}</div>
        <ul >
          {props.items.map((item) => {
              return (
                <li>
                <a href={item.href}>{item.value}</a>
                <span className={classes.material_icons}>{item.icon}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
