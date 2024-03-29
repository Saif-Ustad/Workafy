"use client"
import Hero from "../../components/HomePage/Hero"
import Feature from "../../components/HomePage/Feature"
import Banner from "../../components/HomePage/Banner"
import Category from "../../components/HomePage/Category"
import About from "../../components/HomePage/About"
import Work from "../../components/HomePage/Work"
import Banner2 from "../../components/HomePage/Banner2"
import Achievements from "../../components/HomePage/Achievements"
import Funfact from "../../components/HomePage/Funfact"


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