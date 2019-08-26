import React, { useRef, useEffect, useState } from "react";

import "../styles/AboutContent.css";

function AboutContent() {
  const aboutContainerRef = useRef(null);
  const innerRef = useRef(null);
  const [text, setText] = useState(false);
  useEffect(() => {});
  const toggleText = () => {
    setText(!text);
    if (!text) {
      innerRef.current.style.opacity = 0;
      aboutContainerRef.current.style.opacity = 1;
    } else {
      innerRef.current.style.opacity = 1;
      aboutContainerRef.current.style.opacity = 0;
    }
  };
  return (
    <div className="aboutContentWrapper" ref={aboutContainerRef}>
      <div className="innerContent" ref={innerRef}>
        <h2>七転び八起き</h2>
        <p className="contentBody">
          <span className="space">space</span>
          Japan is a beautiful country. The culture and the scenery is just
          amazing. I found some awesome pictures on Unsplash. Thinking someone
          should tell the stories behind these stunning buildings. After a few
          attempts, I realized the pictures are speaking for themself already.
          It will be a whole "travel" series for me just to mess around new
          design and tell people how beautiful this world is in my way. This
          site is built with React and GSAP.
          <br />
          <br />
          <span className="space">space</span>
          Thanks for all the following unselfish photagraphers shared these
          amazing pictures on Unsplash. I see you.
          <span className="space">s</span>
          <a
            href="https://unsplash.com/photos/n--CMLApjfI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manuel Cosentino - Fujiyoshida-shi
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/hwLAI5lRhdM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clay Banks - Getting myself lost in Japan
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/SBK40fdKbAg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tianshu Liu - Beyond this gate God resides
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/UzpIXWT1EIc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryoji Iwata - Snow in Tokyo
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/pMCbPPPBSkA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daryan Shamkhali - Tokyo crosswalk
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/e1AtwT_cGPU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leio McLaren - Sake Containers
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/wfwUpfVqrKU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alex Knight - Sangenjaya
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/hwLAI5lRhdM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fabrizio Chiagano - Japan
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/MZ00oma1sn0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ismael Abelleira - A Break for Devotion
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/VAtK8vTHb4Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roméo A. - Zamami Island
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/f6hlrIboDUY"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Emrich - Kiyomizu-dera
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/f6hlrIboDUY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tianshu Liu - A View of Kinkaku
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/f6hlrIboDUY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Denny Ryanto - Sapporo ice festival
          </a>
          {", "}
          <a
            href="https://unsplash.com/photos/NCjabLe9uKw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gilles Desjardins - Todaiji temple
          </a>
          <br />
          <br />
          <span className="author">
            <a
              href="https://shenghone.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Author - Sheng Hung Tsai
            </a>
          </span>
        </p>
      </div>
      <button className="toggleButton" onClick={toggleText}>
        {text ? "show text" : "hide text"}
      </button>
    </div>
  );
}

export default AboutContent;
