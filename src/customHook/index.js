import { useState, useEffect } from "react";

export const useResize = () => {
  const [width, setWidth] = useState(null);
  const [onloadWidth, setOnloadWidth] = useState(null);
  useEffect(() => {
    setOnloadWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onloadWidth, width]);
  return [width, onloadWidth];
};
