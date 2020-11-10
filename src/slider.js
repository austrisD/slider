import React, { useState, useEffect, useRef } from "react";
import "./scss/slider.scss";
import right from "./assets/right_arrow.svg";
import left from "./assets/left_arrow.svg";
import dotActive from "./assets/dod_active.svg";
import dotInActive from "./assets/dod_inactive.svg";

let Slider = (props) => {
  let sliderContent = React.Children.toArray(props.children);
  let slideCount = sliderContent.length - 1;
  let animationActive = useRef(false);
  let swipeStart = useRef(0);
  let [SlideNr, setSlideNr] = useState(0);
  useEffect(() => {
    animationActive.current = true;
    setTimeout(() => {
      animationActive.current = false;
    }, 1000);
  }, [SlideNr]);
  const [SlideAnimation, setSlideAnimation] = useState("");

  let nextSlide = () => {
    if (animationActive.current === true) return;
    SlideNr = SlideNr + 1 > slideCount ? 0 : SlideNr + 1;
    setSlideAnimation("toRight");
    setSlideNr(SlideNr);
  };

  let previousSlide = () => {
    if (animationActive.current === true) return;
    SlideNr = SlideNr - 1 < 0 ? slideCount : SlideNr - 1;
    setSlideAnimation("toLeft");
    setSlideNr(SlideNr);
  };
  //slide movement

  let items = [];
  for (let [index] of sliderContent.entries()) {
    items.push(
      <div
        key={index}
        className="slider__dot"
        onClick={() => {
          setSlideAnimation("fade");
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
  //creating dot selection menu in lower part of slider.
  const minSwipeLength = 200;
  let swipeFunction = (swipeEnd) => {
    if (animationActive.current === true) return;
    let SwipeLength = Math.abs(swipeStart.current - swipeEnd);
    if (SwipeLength < minSwipeLength) return;
    swipeStart.current < swipeEnd ? previousSlide() : nextSlide();
    console.log("start:" + swipeStart.current);
    console.log("end:" + swipeEnd);
    console.log("length:" + SwipeLength);
  };
  //**************************handle swipe functions***************************/

  return (
    <div className="slider">
      <button
        style={{ backgroundImage: `url(${left})` }}
        className="slider__swipeLeft"
        onClick={() => {
          previousSlide();
        }}
      ></button>

      <div
        className="sliderContainer"
        onTouchStart={(event) => {
          swipeStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          swipeFunction(event.changedTouches[0].clientX);
        }}
        //************************touch swipe******************************//

        onMouseDown={(event) => {
          swipeStart.current = event.screenX;
        }}
        onMouseUp={(event) => {
          swipeFunction(event.clientX);
        }}
        //*****************************mouse swipe************************//
        draggable="false"
      >
        <div className={`sliderContent ${SlideAnimation}`}>
          {props.children[SlideNr - 1 < 0 ? slideCount : SlideNr - 1]}
          {props.children[SlideNr]}
          {props.children[SlideNr + 1 > slideCount ? 0 : SlideNr + 1]}
        </div>
        <div className="slider__selection">{items}</div>
      </div>

      <button
        style={{ backgroundImage: `url(${right})` }}
        className="slider__swipeRight"
        onClick={() => {
          nextSlide();
        }}
      ></button>
    </div>
  );
};

export default Slider;
