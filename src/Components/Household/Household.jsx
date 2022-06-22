import classes from "./Household.module.css";
import HouseholdCorusel from "./HouseholdCorusel/HouseholdCorusel";
import Household_1 from "../../images/Household_1.jpg";
import Household_2 from "../../images/Household_2.jpg";
import Household_3 from "../../images/Household_3.jpg";
const Household = () => {
  return (
    <div className={classes.class}>
      <HouseholdCorusel>
        <div ><img src={Household_1} alt="" /></div>
        <div ><img src={Household_2} alt="" /></div>
        <div><img src={Household_3} alt="" /></div>
      </HouseholdCorusel>
    </div>
  );
};

export default Household;
