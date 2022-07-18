import "./ScrollBanner.css";
import FirstItem from "./Scroll_items/FirstItem";
import SecondItem from "./Scroll_items/SecondItem";
import ThirdItem from "./Scroll_items/ThirdItem";

import React, { useState } from "react";

const ScrollBanner = () => {
  const Worry_items = [<FirstItem />, <SecondItem />, <ThirdItem />];

  const [index, setIndex] = useState(0);

  const itemsLength = Worry_items.length;

  const increase = () => {
    if (index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (index > itemsLength - 2) {
      setIndex(0);
    }
  };

  const decrease = () => {
    if (index < 1) {
      setIndex(itemsLength - 1);
    } else if (index < itemsLength) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="ScrollBanner">
      <div className="inner">
        <div className="Scroll_Wrapper">
          <h3>그 동안 고민 많았죠?</h3>
          <div className="ScrollView">
            <div className="MoveItems_btn1" onClick={decrease}>
              &lt;
            </div>
            <div className="items">{Worry_items[index]}</div>
            <div className="MoveItems_btn2" onClick={increase}>
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBanner;
