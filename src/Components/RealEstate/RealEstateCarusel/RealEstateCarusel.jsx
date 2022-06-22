import classes from "./RealEstateCarusel.module.css";

import { Children, cloneElement, useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Page_WIdth = 450;

const RealEstateCarusel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${Page_WIdth}px`,
            maxWidth: `${Page_WIdth}px`,
          },
        });
      })
    );
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + Page_WIdth;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - Page_WIdth;
      const maxOffset = -(Page_WIdth * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className={classes.main_conteiner}>
      <AiOutlineArrowLeft className={classes.arrow} onClick={handleLeftArrowClick} />
      <div className={classes.window}>
        <div
          className={classes.all_pages_conteiner}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <AiOutlineArrowRight className={classes.arrow} onClick={handleRightArrowClick} />
    </div>
  );
};

export default RealEstateCarusel;
