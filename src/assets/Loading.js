import React from 'react';
import loadCircle from "./loading.svg";


const Loading = () => {
    return <div style={{backgroundImage:`url(${loadCircle})`}} className="Loading"></div>;
}
 
export default Loading;