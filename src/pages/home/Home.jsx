import React, { useState } from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import {calender,news,events, projects, gigs } from '../../data';
import CatCard from '../../components/catCard/CatCard';

import ProjectCard from '../../components/CardProjects/projectCard';
import Calender from '../../components/calender/Calender';

import "./Home.scss"
import Classes from '../../components/classes/Classes';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState('Calendar'); // Default option is 'Calendar'

  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Classes/>
      <Calender setSelectedOption={setSelectedOption} />
       <div className="catHome">

        {selectedOption === 'Calendar' && (
          calender.map((card) => {
            return <CatCard key={card.id} item={card} />;
          }))}
        {selectedOption === 'News' && (
          news.map((n)=>{
            return <CatCard key={n.id} item={n} />;
          })
        )}
        {selectedOption === 'Admissions' && (
         events.map((e)=>{
          return <CatCard key={e.id} item={e} />;
         })
        )}
    </div>
    <Slide slidesToShow={3} arrowsScroll={4}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} item={project} />;
        })}
      </Slide>
 
      
    </div>
  );
};

export default Home;
