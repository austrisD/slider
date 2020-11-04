import React, { useState, useEffect } from "react";
// import  Arrow from "./assets/icons";

import "./style.scss";

const Arrow = ()=>{
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
        clip-rule="evenodd"
      ></path>
      <path
        fill-rule="evenodd"
        d="M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

let activeSlide = 1;

const Slider = (props) => {
  let sliderContent = React.Children.toArray(props.children);
  let slideCount = sliderContent.length - 1;

  let swipeRight = () => {
    activeSlide = activeSlide + 1;
    activeSlide = activeSlide > slideCount ? 0 : activeSlide;
    setActive(activeSlide);
  };

  let swipeLeft = () => {
    activeSlide = activeSlide - 1;
    activeSlide = activeSlide < 0 ? slideCount : activeSlide;
    setActive(activeSlide);
  };

  const [Active, setActive] = useState(0);
  // useEffect(() => {
  //   console.log("works");
  // }, [props.children]);

  return (
    <div className="slider">
      <button
        className="slider__swipeLeft"
        onClick={() => {
          swipeLeft();
        }}
      >
        <Arrow  />
      </button>
      <div className="sliderContainer">
        <div className="sliderContent">{props.children[Active]}</div>
      </div>
      <button
        className="slider__swipeRight"
        onClick={() => {
          swipeRight();
        }}
      >
        <Arrow/>
      </button>
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

