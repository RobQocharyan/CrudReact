import classes from "./Services.module.css";
import Services_1 from "../../images/Services_1.jpg";
import Services_2 from "../../images/Services_2.jpg";
import Services_3 from "../../images/Services_3.jpg";
import ServicesCorusel from "./ServicesCorusel/ServicesCorusel";
const Services = () => {
  return (
    <div className={classes.class}>
      <ServicesCorusel>
        <div ><img src={Services_1} alt="" /></div>
        <div ><img src={Services_2} alt="" /></div>
        <div><img src={Services_3} alt="" /></div>
      </ServicesCorusel>
    </div>
  );
};

export default Services;
