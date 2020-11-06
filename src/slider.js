import React, { useState, useEffect } from "react";
import "./scss/slider.scss";
import right from "./assets/republican_Right.svg";
import left from "./assets/democrat_left.svg";
import dotActive from "./assets/dod_active.svg";
import dotInActive from "./assets/dod_inactive.svg";


let Slider = (props) => {
  let sliderContent = React.Children.toArray(props.children);
  let slideCount = sliderContent.length - 1;
  let [SlideNr, setSlideNr] = useState(0);

  let swipeRight = () => {
    SlideNr = SlideNr + 1;
    SlideNr = SlideNr > slideCount ? 0 : SlideNr;
    setSlideNr(SlideNr);
  };

  let swipeLeft = () => {
    SlideNr = SlideNr - 1;
    SlideNr = SlideNr < 0 ? slideCount : SlideNr;
    setSlideNr(SlideNr);
  };

  let items = [];
  for (let [index] of sliderContent.entries()) {
    items.push(
      <div
        className="slider__dot"
        onClick={() => {
          setSlideNr(index);
        }}
        style={{
          backgroundImage: `url(${
            SlideNr === index ? dotActive : dotInActive
          })`,
        }}
      ></div>
    );
  }

  useEffect(() => {
    console.log("SlideNr changed");
  }, [SlideNr, items]);

  return (
    <div className="slider">
      <button
        style={{ backgroundImage: `url(${left})` }}
        className="slider__swipeLeft"
        onClick={() => {
          swipeLeft();
        }}
      ></button>

      <div className="sliderContainer">
        <div className="sliderContent">{props.children[SlideNr]}</div>
        <div className="slider__selection">{items}</div>
      </div>

      <button
        style={{ backgroundImage: `url(${right})` }}
        className="slider__swipeRight"
        onClick={() => {
          swipeRight();
        }}
      ></button>
    </div>
  );
};

export default Slider;

/* <style
        dangerouslySetInnerHTML={{
          __html: `
      .sliderContent { color: blue }
      .sliderContent *:nth-child(${Active}){display:none}
    `,
        }}
      /> */
// style={{ backgroundImage: `url(${Arrow})` }}
