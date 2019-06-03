import React, { useRef, useContext } from "react";
import { PlaceContext } from "../App";
import "../styles/SmallPic.css";

const data = require("../data/images");

const SmallPic = React.memo(function(props) {
  const { images } = data;
  const percentage = 1 / 13;
  const imageRef = useRef(null);
  const { setCurrentPlace } = useContext(PlaceContext);
  //every image loads, add the percentage based on the total picture in database
  return (
    <div
      className="smallPicWrapper"
      onClick={() => setCurrentPlace(images[props.index])}
    >
      <img
        ref={imageRef}
        onLoad={() => props.setProgress(props.progress + percentage)}
        src={props.imageLink}
        alt={props.title}
      />
    </div>
  );
});

export default SmallPic;
