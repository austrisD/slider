import React, { Suspense } from "react";
import "../scss/Gallery.scss";
import Loading from "../assets/Loading.js";
import { galleryData } from "../data/galleryData";

const GalleryPhoto = (name,url) => {
  return (
    <Suspense fallback={Loading}>
      <div className="gallery__photo">
        <p>{name}</p>
        <img src={url} alt="fail to load data" />
      </div>
    </Suspense>
  );
};

let Gallery = () => {
const listItems = galleryData.map((index) => 
GalleryPhoto(index.name, index.url)
);
return <div className="Gallery">{listItems}</div>;
};

export default Gallery;
