import React, { useRef, useContext, useEffect } from "react";
import { PlaceContext, StatusContext } from "../App";
import { TweenMax } from "gsap";
import "../styles/SmallPic.css";

const data = require("../data/images");

const SmallPic = React.memo(function({ progress, setProgress, ...props }) {
  const { images } = data;
  const percentage = 1 / images.length;
  const { start } = useContext(StatusContext);
  const imageRef = useRef(null);
  const { setCurrentPlace } = useContext(PlaceContext);
  const smallPicRef = useRef(null);
  useEffect(() => {
    if (start) {
      const anim = () => {
        TweenMax.set(smallPicRef.current, {
          opacity: 1
        });
      };
      window.requestAnimationFrame(anim);
    }
  }, [start]);
  return (
    <div
      className="smallPicWrapper"
      onClick={() => setCurrentPlace(images[props.index])}
      ref={smallPicRef}
    >
      <img
        ref={imageRef}
        onLoad={() => setProgress(progress + percentage)}
        src={props.imageLink}
        alt={props.title}
      />
    </div>
  );
});

export default SmallPic;
