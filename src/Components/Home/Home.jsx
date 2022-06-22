import classes from "./Home.module.css";
import Home_1 from "../../images/Home_1.jpg";
import Home_2 from "../../images/Home_2.jpg";
import Home_3 from "../../images/Home_3.jpg";
import HomeCarusel from "./HomeCarusel/HomeCarusel";
const Home = () => {
  return (
    <div className={classes.class}>
      <HomeCarusel>
        <div ><img src={Home_1} alt="" /></div>
        <div ><img src={Home_2} alt="" /></div>
        <div><img src={Home_3} alt="" /></div>
      </HomeCarusel>
    </div>
  );
};

export default Home;
