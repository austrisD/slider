import React,{ Suspense} from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Slider from "./Slider";
import Loading from "./assets/Loading";
const Spices = React.lazy(() => import("./sliderContent/Spices"));
const Paragraph = React.lazy(() => import("./sliderContent/Paragraph"));
const Form = React.lazy(() => import("./sliderContent/Form"));
const Gallery = React.lazy(() => import("./sliderContent/Gallery"));

const Hello = () => (
  <>
    <header>
      <h1>React Props slider</h1>
    </header>
    <main>
      <Slider>
        <Suspense fallback={Loading}>
          <Paragraph />
        </Suspense>
        <Suspense fallback={Loading}>
          <Spices />
        </Suspense>
        <Suspense fallback={Loading}>
          <Form />
        </Suspense>
        <Suspense fallback={Loading}>
          <Gallery />
        </Suspense>
      </Slider>
    </main>
    <footer></footer>
  </>
);

const Root = document.getElementById("root");
ReactDOM.render(<Hello />, Root);
