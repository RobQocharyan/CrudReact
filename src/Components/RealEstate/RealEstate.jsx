import classes from "./RealEstate.module.css";
import RealEstate_1 from "../../images/RealEstate_1.jpg";
import RealEstate_2 from "../../images/RealEstate_2.jpg";
import RealEstate_3 from "../../images/RealEstate_3.jpg";
import RealEstateCarusel from "./RealEstateCarusel/RealEstateCarusel";
const RealEstate = () => {
  return (
    <div className={classes.class}>
      <RealEstateCarusel>
        <div ><img src={RealEstate_1} alt="" /></div>
        <div ><img src={RealEstate_2} alt="" /></div>
        <div><img src={RealEstate_3} alt="" /></div>
      </RealEstateCarusel>
    </div>
  );
};

export default RealEstate;
