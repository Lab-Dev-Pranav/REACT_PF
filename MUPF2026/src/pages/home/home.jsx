import React from 'react';
import Hero from './hero';
import About from './about';
import WhatIDo from './whatido';
import MyDomain from './mydomain';
import Academics from './academics';
import BlogPost from './blogPost';
import MyCertification from './mycertification';
import ResponsibilityAchievement from './responsibility-achievement';
import { Helmet } from "react-helmet-async";
import CubeLoader from "./CubeLoader"

 import WeWorked from "./WeWorked";
 

const Home = () => {
  return (

    <div className="page-home">

      <Helmet>
        <title>Home | Dev.Pranav</title>
        <meta name="description" content="Home | Dev.Pranav" />
        <meta name="keywords" content="Home | Dev.Pranav" />
        <meta name="author" content="Dev.Pranav" />
      </Helmet>

      <Hero />
      <About />
      <WhatIDo />
      <MyDomain />
      <WeWorked />
      <Academics />
      <BlogPost />
      <MyCertification />
      <ResponsibilityAchievement />

      {/* < CubeLoader /> */}


    </div>
  );
};

export default Home;
