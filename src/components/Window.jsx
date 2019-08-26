import React, { useRef, useEffect, useContext, useState } from "react";
import { PlaceContext } from "../App";
import { useResize } from "../customHook";
import "../styles/Window.css";
import { TweenMax, TimelineMax } from "gsap";
import Map from "./Map";

const Window = React.memo(function() {
  const { currentPlace } = useContext(PlaceContext);
  const leftContainerRef = useRef(null);
  const textAreaRef = useRef(null);
  const rightContainerRef = useRef(null);
  const [width, onLoadWidth] = useResize();
  const [moveToRight, setMoveToRight] = useState(false);

  //once hovered in the big picture container, hide text
  const hideText = () => {
    if (currentPlace && leftContainerRef) {
      const textArea = leftContainerRef.current.children[1];
      textArea.style.opacity = 0;
    }
  };

  //once cursor leave the left container, show text
  const showText = () => {
    if (currentPlace && leftContainerRef) {
      const textArea = leftContainerRef.current.children[1];
      textArea.style.opacity = 1;
    }
  };

  useEffect(() => {
    //center the map when the app started but user hasn't selected any picture
    //when the user's screen width is greater than 1024px
    if (!currentPlace && onLoadWidth > 1024) {
      TweenMax.set(rightContainerRef.current, {
        xPercent: -50
      });
    }

    //if the user's screen width is less than 1024px, leave the map as is
    if (width && width < 1024) {
      TweenMax.set(rightContainerRef.current, {
        xPercent: 0
      });
    }

    //move the map to right when user selected a picture
    if (!moveToRight) {
      let et = new TimelineMax();
      if (currentPlace) {
        et.to(rightContainerRef.current, 0, {
          xPercent: 0,
          opacity: 0.5,
          onComplete: function() {
            setMoveToRight(true);
          }
        }).to(rightContainerRef.current, 0.8, {
          opacity: 1
        });
      }
    }
  }, [moveToRight, onLoadWidth, width, currentPlace]);

  //to fade in the picture when user selected any picture
  useEffect(() => {
    if (!currentPlace) {
      const anim = () => {
        TweenMax.set(leftContainerRef.current, {
          css: {
            zIndex: "-1"
          }
        });
      };
      window.requestAnimationFrame(anim);
    }

    if (!moveToRight) {
      const anim = () => {
        TweenMax.set(leftContainerRef.current, {
          opacity: 0,
          scaleX: 0.9,
          scaleY: 0.9
        });
      };
      window.requestAnimationFrame(anim);
    }
    if (moveToRight) {
      const anim = () => {
        TweenMax.set(leftContainerRef.current, {
          opacity: 0,
          scaleX: 0.9,
          scaleY: 0.9
        });
        TweenMax.to(leftContainerRef.current, 0.8, {
          css: {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            filter: "blur(0px)",
            zIndex: 5
          }
        });
      };
      window.requestAnimationFrame(anim);
    }
  }, [moveToRight, currentPlace, leftContainerRef]);

  return (
    <div className="windowWrapper">
      <div
        onMouseEnter={() => hideText()}
        onMouseLeave={() => showText()}
        ref={leftContainerRef}
        className="pic leftContainer"
      >
        {currentPlace ? (
          <>
            <img
              className="currentPlaceClass"
              src={currentPlace.imageLinkHigh}
              alt="store"
            />
            <div ref={textAreaRef} className="textArea">
              <h2>{currentPlace.title}</h2>
              <h4>{currentPlace.titleKanji}</h4>
            </div>
          </>
        ) : null}
      </div>

      <div ref={rightContainerRef} className="pic rightContainer">
        <Map />
      </div>
      {!currentPlace ? (
        <div className="description">
          <h2>select a picture to start the journey</h2>
        </div>
      ) : null}
    </div>
  );
});

export default Window;
