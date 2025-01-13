import React from "react";
import './Home.css';
import Hero from "../../components/Hero/Hero";
import Companies from "../../components/Companies/Companies";
import Contact from "../../components/Contact/Contact";
import Residencies from "../../components/Residencies/Residencies";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div>
          <Header/>
          <Hero/>
          <Companies/>
          <Residencies/>
          <Contact/>
          <About/>
          <Footer/>
        </div>
    )
}

export default Home