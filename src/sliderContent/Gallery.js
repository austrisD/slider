import React, { Suspense } from "react";
import "../scss/Gallery.scss";
import Loading from "../assets/Loading.js";
import { galleryData } from "../data/galleryData";

const GalleryPhoto = (name,url,wiki) => {
  return (
    <Suspense fallback={Loading}>
      <div
        className="gallery__photo"
        style={{ backgroundImage: `url(${url})` }}
      >
        <p>{name}</p>
        <a href={wiki}>Wiki</a>
      </div>
    </Suspense>
  );
};

let Gallery = () => {
const listItems = galleryData.map((index) => 
GalleryPhoto(index.name, index.url,
  index.wiki)
);
return <div className="Gallery">{listItems}</div>;
};

export default Gallery;
