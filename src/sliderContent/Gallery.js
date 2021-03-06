import React, { Suspense } from "react";
import "../scss/Gallery.scss";
import Loading from "../assets/Loading.js";
import { galleryData } from "../data/galleryData";

const GalleryPhoto = (name, url, wiki, keyProp) => {
  return (
    <div draggable="false" key={keyProp} className="gallery__photo">
      <Suspense fallback={Loading}>
        <a draggable="false" href={wiki}>
          <img draggable="false" src={url} alt={name} title={name} />
        </a>
      </Suspense>
    </div>
  );
};

export let Gallery = () => {
  const listItems = galleryData.map((value, index) =>
    GalleryPhoto(value.name, value.url, value.wiki, index)
  );
  return <div className="Gallery">{listItems}</div>;
};
