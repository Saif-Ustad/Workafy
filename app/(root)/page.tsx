"use client"
import Hero from "../../components/Hero"
import Feature from "../../components/Feature"
import Banner from "../../components/Banner"
import Category from "../../components/Category"
import About from "../../components/About"
import Work from "../../components/Work"
import Banner2 from "../../components/Banner2"
import Achievements from "../../components/Achievements"
import Funfact from "../../components/Funfact"


import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

//react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {


  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.init({
        duration: 800,
        offset: 200,
        easing: "ease-in-out",
        once: false,
        anchorPlacement: "top-bottom"
      });
    }, 100); // Delay AOS initialization by 100ms
    return () => clearTimeout(timeout); // Clean up the timeout
  }, []);

  return (
    <>
      <Hero />
      <Feature />
      <Banner />
      <Category />
      <About />
      <Work />
      <Banner2 />
      <Achievements />
      <Funfact />
    </>

  )
}

export default Home;