import React, { useRef, useEffect, useContext } from "react";
import { StatusContext, PlaceContext } from "../App";
import { useResize } from "../customHook";
import "../styles/Window.css";
import { TweenMax, TimelineMax, Expo } from "gsap";
import Map from "./Map";

function Window() {
  const { start, setStart } = useContext(StatusContext);
  const { currentPlace } = useContext(PlaceContext);
  const leftContainerRef = useRef(null);
  const textAreaRef = useRef(null);
  const rightContainerRef = useRef(null);
  const blockerRef = useRef(null);
  const h2Ref = useRef(null);
  const [width, onLoadWidth] = useResize();

  //once hovered in the big picture container, hide text
  const hideText = () => {
    if (start && currentPlace && leftContainerRef) {
      const textArea = leftContainerRef.current.children[1];
      textArea.style.opacity = 0;
    }
  };

  //once cusor leave the left container, show text
  const showText = () => {
    if (start && currentPlace && leftContainerRef) {
      const textArea = leftContainerRef.current.children[1];
      textArea.style.opacity = 1;
    }
  };

  useEffect(() => {
    //center the map when the app started but user hasn't selected any picture
    if (start && !currentPlace && onLoadWidth > 1024) {
      TweenMax.set(rightContainerRef.current, {
        xPercent: -50
      });
    }
    if (width && width < 1024) {
      TweenMax.set(rightContainerRef.current, {
        xPercent: 0
      });
    }

    //move the map to right when user selected a picture
    let et = new TimelineMax();
    if (start && currentPlace) {
      et.to(rightContainerRef.current, 0, {
        xPercent: 0
      }).to(rightContainerRef.current, 0.8, {
        css: {
          opacity: 1
        }
      });
    }
  }, [onLoadWidth, width, start, currentPlace]);

  //to fade in the picture when user selected any picture
  useEffect(() => {
    if (start && !currentPlace) {
      TweenMax.set(leftContainerRef.current, {
        css: {
          zIndex: "-1"
        }
      });
    }
    if (start && currentPlace) {
      TweenMax.set(leftContainerRef.current, {
        css: {
          opacity: 1,
          filter: "blur(0)",
          zIndex: 2
        }
      });
      TweenMax.from(leftContainerRef.current, 0.8, {
        css: {
          scaleX: 0.8,
          scaleY: 0.8,
          opacity: 0,
          filter: "blur(1px)"
        }
      });
      TweenMax.from(textAreaRef.current, 1, {
        x: -5,
        opacity: 0,
        ease: Expo.easeOut
      });
    }
  }, [start, currentPlace, leftContainerRef]);

  //to fade out the "explore container"
  useEffect(() => {
    if (start) {
      TweenMax.to(blockerRef.current, 0.5, {
        css: {
          scaleX: 1.1,
          scaleY: 1.1,
          transformOrigin: "center",
          autoAlpha: 0
        },
        Ease: Expo.easeInout
      });
    }
  }, [start]);

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
      {!currentPlace && start ? (
        <div className="description">
          <h2>select a picture to start the journey</h2>
        </div>
      ) : null}
      <div ref={blockerRef} className="blocker">
        <h2 ref={h2Ref} onClick={() => setStart(true)}>
          explore
        </h2>
      </div>
    </div>
  );
}

export default Window;
