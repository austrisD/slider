import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Slider from "./slider/Slider";
import { Paragraph } from "./sliderContent/Paragraph";
import { Spices } from "./sliderContent/Spices";
import { Form } from "./sliderContent/Form";
import { Gallery } from "./sliderContent/Gallery";

const Hello = () => {
  return (
    <>
      <header>
        <h1>React Props slider</h1>
      </header>
      <main>
        <Slider>
          <Paragraph />
          <Spices />
          <Form />
          <Gallery />
        </Slider>
      </main>
      <footer>Made by Austris Daugulis &copy;</footer>
    </>
  );
};

const Root = document.getElementById("root");
ReactDOM.render(<Hello />, Root);
