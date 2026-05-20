import React from 'react';
import Hero from './hero';
import About from './about';
import WhatIDo from './whatido';
import MyDomain from './mydomain';
import Academics from './academics';
import BlogPost from './blogPost';
import MyCertification from './mycertification';
import ResponsibilityAchievement from './responsibility-achievement';


const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <About />
      <WhatIDo />
      <MyDomain />
      <Academics />
      <BlogPost />
      <MyCertification />
      <ResponsibilityAchievement />
    </div>
  );
};

export default Home;
