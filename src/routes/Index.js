
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CarouselBanner from "../pages/CarouselBanner";
import { NavBar, PhoneMenu } from "../components/Navbar";
import Skills from "../pages/Skills/Skills";
import Footer from "../pages/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Project/Project";
import About from "../pages/About/About";

const Index = (prop) => {
  const [openMenu,setOpenMenu]=useState(false);
  
    return (
      <div className="bg-secondary min-h-screen max-h-screen overflow-y-auto overflow-x-hidden w-full dark:bg-dark_secondary">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <CarouselBanner/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>

        {openMenu&&<PhoneMenu/>}
        {/* <About/> */}
      </div>
    );
  };
  
  export default Index;