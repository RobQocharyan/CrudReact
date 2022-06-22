import classes from "./Transport.module.css";
import Transport_1 from "../../images/Transport_1.jpg";
import Transport_2 from "../../images/Transport_2.jpg";
import Transport_3 from "../../images/Transport_3.jpg";
import TransportCarusel from "./TransportCarusel/TransportCarusel";
const Transport = () => {
  return (
    <div className={classes.class}>
      <TransportCarusel>
        <div ><img src={Transport_1} alt="" /></div>
        <div ><img src={Transport_2} alt="" /></div>
        <div><img src={Transport_3} alt="" /></div>
      </TransportCarusel>
    </div>
  );
};

export default Transport;
