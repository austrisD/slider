import React, { useState, useEffect } from "react";

import "./style.scss";

let nr = 1;

const Slider = (props) => {
  let sliderContent = React.Children.toArray(props.children);

  let func = () => {
    nr = nr +1;
    nr = nr > sliderContent.length - 1 ?0:nr;
    setActive(nr);
    console.log(nr); 
  };

  const [Active, setActive] = useState(0);
  // useEffect(() => {
  //   console.log("works");
  // }, [props.children]);

  return (
    <div className="sliderContainer">
      {/* <style
        dangerouslySetInnerHTML={{
          __html: `
      .sliderContent { color: blue }
      .sliderContent *:nth-child(${Active}){display:none}
    `,
        }}
      /> */}
      <button
        onClick={() => {
          func();
        }}
      >
        NEXT
      </button>
      <div className="slider">
        <div className="sliderContent">{props.children[Active]}</div>
      </div>
    </div>
  );
};

export default Slider;
