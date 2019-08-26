import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/Layout";
import Carousal from "../components/Carousal";
import Window from "../components/Window";
import { StatusContext } from "../App";

function Home(props) {
  const [progress, setProgress] = useState(0);
  const { setStart } = useContext(StatusContext);
  useEffect(() => {
    if (Math.round(progress * 100) === 100) {
      setStart(true);
    }
  }, [progress, setStart]);
  return (
    <Layout>
      <Window />
      <Carousal progress={progress} setProgress={setProgress} />
    </Layout>
  );
}

export default Home;
