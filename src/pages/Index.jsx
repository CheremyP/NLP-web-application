import React, { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Feature2 from "../components/Feature2";

function Index() {
  const sectionTwoRef = useRef(null);

  const scrollToNextSection = () => {
    sectionTwoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
    <Header scrollToNextSection={scrollToNextSection}/>
    <Hero scrollToNextSection={scrollToNextSection}/>
      <div ref={sectionTwoRef}><Feature2/></div>
    <Feature/>
    <Footer/>
    </div>
  );
}

export default Index;