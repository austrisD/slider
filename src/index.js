import React,{ Suspense} from "react";
import ReactDOM from "react-dom";
React.lazy(()=> import("./style.scss"));
import Slider from "./slider";
const Spices = React.lazy(() => import("./sliderContent/Spices"));
const Paragraph = React.lazy(() => import("./sliderContent/Paragraph"));
const Form = React.lazy(() => import("./sliderContent/Form"));

const Hello = () => (
  <>
    <header>
      <h1>React Props slider</h1>
    </header>
    <main>
        <Slider>
          <Suspense fallback={<div>loading...</div>}>
            <Paragraph />
          </Suspense>
          <Suspense fallback={<div>loading...</div>}>
            <Spices />
          </Suspense>
          <Suspense fallback={<div>loading...</div>}>
            <Form />
          </Suspense>
        </Slider>
    </main>
    <footer></footer>
  </>
);

const Root = document.getElementById("root");
ReactDOM.render(<Hello />, Root);
