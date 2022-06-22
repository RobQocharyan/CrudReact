import classes from "./Fashion.module.css"
import Fashion_1 from "../../images/Fashion_1.jpg";
import Fashion_2 from "../../images/Fashion_2.jpg";
import Fashion_3 from "../../images/Fashion_3.jpg";
import FashionCarusel from "./FashionCarusel/FashionCarusel";


const Fashion =  () => {
  return (
    <div className={classes.class}>
      <FashionCarusel>
        <div ><img src={Fashion_1} alt="" /></div>
        <div ><img src={Fashion_2} alt="" /></div>
        <div><img src={Fashion_3} alt="" /></div>
      </FashionCarusel>
    </div>
  );
};

export default Fashion;
