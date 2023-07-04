import React from "react";
import { urlFor } from "~/utils/image";

const Hero = (props) => {

    return (
        <div className="hero" style={{ backgroundImage: `url(${urlFor(props.component.image).url()}` }}>
            {
                React.createElement(props.component.tagline, {className: 'heading'}, props.component.heading)
            }
        </div>
    );
}

export default Hero;
