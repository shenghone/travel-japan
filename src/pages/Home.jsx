import React from "react";
import Layout from "../components/Layout";
import Carousal from "../components/Carousal";
import Window from "../components/Window";

function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Window />
      <Carousal />
    </Layout>
  );
}

export default Home;
