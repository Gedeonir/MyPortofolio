
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CarouselBanner from "../pages/CarouselBanner";
import { NavBar, PhoneMenu } from "../components/Navbar";
import Skills from "../pages/Skills/Skills";
import Footer from "../pages/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Project/Project";
import About from "../pages/About/About";
import Tools from "../pages/Skills/ToolBox";

const Index = (prop) => {
  const [openMenu,setOpenMenu]=useState(false);
  
    return (
      <div className="bg-secondary min-h-screen max-h-screen overflow-y-auto overflow-x-hidden w-full dark:bg-dark_secondary">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <CarouselBanner id="About"/>
        <Skills id="Skills"/>
        <Tools/>
        <Projects id="Projects"/>
        <Contact id="Get in touch"/>
        <Footer/>

        {openMenu&&<PhoneMenu/>}
        {/* <About/> */}
      </div>
    );
  };
  
  export default Index;