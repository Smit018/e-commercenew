import React from "react";
import Services from "./components/Servies";
import HeroSection from "./components/HeroSection"
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data={
    name:"Smit Store"
  }
  return (
   <>
    <HeroSection  myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
   </>
  )
  
};



export default Home;