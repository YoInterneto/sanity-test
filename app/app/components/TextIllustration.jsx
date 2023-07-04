import React from "react";
import { urlFor } from "~/utils/image";

const TextIllustration = (props) => {
  return (
    <div className="text-illustration">
      {
        React.createElement(props.component.tagline, { className: 'heading' }, props.component.heading)
      }
      <div className={`body-copy ${props.component.reversed ? 'reversed' : ''}`}>
        <p>{props.component.copy}</p>
        <img src={urlFor(props.component.image).url()} alt={props.component.image.alt} />
      </div>
    </div>
  );
}

export default TextIllustration;
