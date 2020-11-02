import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import Slider from "./slider";
import Spices from "./sliderContent/Spices";
import Paragraph from "./sliderContent/Paragraph";

const Hello = () => {
  return (
    <>
      <header></header>
      <main>
        <Slider>
          <Paragraph />
          <Spices />
          <Paragraph />
        </Slider>
      </main>
      <footer></footer>
    </>
  );
};

const Root = document.getElementById("root");
ReactDOM.render(<Hello />, Root);
