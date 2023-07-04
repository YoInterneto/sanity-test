import React from "react";
import { urlFor } from "~/utils/image";

const Gallery = (props) => {
  console.log(props.component)
  return (
    <div className="gallery">
      {
        props.component.images.map((image, index) => {
          return <img key={index} src={urlFor(image).url()}/>
        })
      }
    </div>
  );
}

export default Gallery;
