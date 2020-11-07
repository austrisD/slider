import React from 'react';
import loadCircle from "./loading.svg";
import '../scss/main.scss';


const Loading = () => {
    return <div style={{backgroundImage:`url(${loadCircle})`}} className="Loading"></div>;
}
 
export default Loading;