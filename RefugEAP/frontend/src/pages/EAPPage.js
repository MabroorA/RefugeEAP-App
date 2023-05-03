import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Goals from "../components/Goals";
import Studies from "../components/Studies";
import Wrapper_EAP from "../wrappers/EAP";
import stock_refugee_image_4 from "../images/stock_refugee_image_4.png";

const EAPPage = () => {
  return (
    <>
      <Hero
        props={{
          title: "RefugEAP",
          subtitle: "",
          btn: "Case studies",
          url: "#studies",
          style: "eap-hero",
        }}
        img={stock_refugee_image_4}
      />
        <About />
      {/* <Goals /> */}
      {/* <Studies /> */}
    </>
  );
};

export default EAPPage;
