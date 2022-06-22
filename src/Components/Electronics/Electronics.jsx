
import classes from "./Electronics.module.css";
import Electronics_1 from "../../images/Electronics_1.jpg";
import Electronics_2 from "../../images/Electronics_2.jpg";
import Electronics_3 from "../../images/Electronics_3.jpg";
import ElectronicsCarusel from "./ElectronicsCarusel/ElectronicsCarusel";
const Electronics = () => {
  return (
    <div className={classes.class}>
      <ElectronicsCarusel>
        <div ><img src={Electronics_1} alt="" /></div>
        <div ><img src={Electronics_2} alt="" /></div>
        <div><img src={Electronics_3} alt="" /></div>
      </ElectronicsCarusel>
    </div>
  );
};

export default Electronics;
