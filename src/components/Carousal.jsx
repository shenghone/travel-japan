import React, { useState, useContext, useRef, useEffect } from "react";
import SmallPic from "./SmallPic";
import { useResize } from "../customHook";

import "../styles/Carousal.css";
import { PlaceContext, StatusContext } from "../App";
import { TweenMax } from "gsap";

let data = require("../data/images.json");

const Carousal = React.memo(function(props) {
  const { start } = useContext(StatusContext);
  const { currentPlace } = useContext(PlaceContext);
  const [progress, setProgress] = useState(0);
  const carousalRef = useRef(null);
  const [width] = useResize();

  //if the user's screen width is less than 1024 and the user
  //hasn't select any place, move the carousal closer to the map
  useEffect(() => {
    const wid = window.innerWidth;
    if (start && !currentPlace && wid < 1024) {
      TweenMax.set(carousalRef.current, {
        y: "-210%"
      });
    }
    if (start && currentPlace) {
      TweenMax.set(carousalRef.current, {
        opacity: 0
      });
      TweenMax.set(carousalRef.current, {
        opacity: 1,
        y: "0%"
      });
    }
  }, [currentPlace, start, carousalRef, width]);
  return (
    <section ref={carousalRef} className="carousalWrapper">
      {start
        ? data.images.map((place, index) => {
            return (
              <SmallPic
                imageLink={place.imageLink}
                title={place.title}
                key={index}
                setProgress={setProgress}
                progress={progress}
                index={index}
              />
            );
          })
        : null}
    </section>
  );
});

export default Carousal;
