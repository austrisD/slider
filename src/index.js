import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";



const Hello = () => {
    return (
        <div>
            <h1>hello USER</h1>
        </div>
    );
}




const Root = document.getElementById("root");
ReactDOM.render(<Hello />, Root);