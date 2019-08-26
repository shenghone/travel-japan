import React, { useContext, useRef, useEffect } from "react";
import SmallPic from "./SmallPic";
import { useResize } from "../customHook";

import "../styles/Carousal.css";
import { PlaceContext, StatusContext } from "../App";
import { TweenMax } from "gsap";

let data = require("../data/images.json");

const Carousal = React.memo(function({ progress, setProgress }) {
  const { start } = useContext(StatusContext);
  const { currentPlace } = useContext(PlaceContext);
  const carousalRef = useRef(null);
  const barRef = useRef(null);
  const [width] = useResize();

  //if the user's screen width is less than 1024 and the user
  //hasn't select any place, move the carousal closer to the map
  useEffect(() => {
    const wid = window.innerWidth;
    if (!currentPlace && wid < 1024) {
      const anim = () => {
        TweenMax.set(carousalRef.current, {
          y: "-210%"
        });
      };
      window.requestAnimationFrame(anim);
    }
    if (currentPlace) {
      const anim = () => {
        TweenMax.set(carousalRef.current, {
          opacity: 0
        });
        TweenMax.to(carousalRef.current, 0, {
          opacity: 1,
          y: "0%"
        });
      };
      window.requestAnimationFrame(anim);
    }
  }, [start, width, currentPlace]);

  useEffect(() => {
    if (Math.round(progress * 100) < 100) {
      TweenMax.set(barRef.current, {
        width: `${Math.round(progress * 100)}%`
      });
    }
    if (Math.round(progress * 100) === 100) {
      TweenMax.set(barRef.current, {
        display: "none"
      });
    }
  }, [progress]);
  return (
    <section ref={carousalRef} className="carousalWrapper">
      <div ref={barRef} className="progressBar"></div>

      {data.images.map((place, index) => {
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
      })}
    </section>
  );
});

export default Carousal;
