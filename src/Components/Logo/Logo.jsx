import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div>
      <NavLink to="/logo">
        <img src={logo} alt="logo" className={classes.logo} />
      </NavLink>
      
    </div>
  );
};



export default Logo;