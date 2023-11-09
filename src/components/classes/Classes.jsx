import React, { useState, useEffect } from "react";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import {Typography,Button,ButtonGroup,Container} from "@material-ui/core"
import "./Classes.scss";
import ScienceIcon from '@mui/icons-material/Science';
import PercentIcon from '@mui/icons-material/Percent';
import CalculateIcon from '@mui/icons-material/Calculate';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AddchartIcon from '@mui/icons-material/Addchart';
import BalanceIcon from '@mui/icons-material/Balance';
import GavelIcon from '@mui/icons-material/Gavel';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useInView } from 'react-intersection-observer';
const subjects = [
  {
    title: "Science",
    description: "Explore the world of numbers and equations with our mathematics classes.",
    icons: [
      <ScienceIcon className="ic" />,
      <PercentIcon className="ic" />,
      <CalculateIcon className="ic" />,
     
    ],
  },
  {
    title: "Arts",
    description: "Uncover the wonders of the natural world with our engaging science classes.",
    icons: [
      <BalanceIcon className="ic" />,
      <GavelIcon className="ic" />,
      <LibraryBooksIcon className="ic" />,
    ],
  },
  {
    title: "Accounting",
    description: "Travel back in time and discover the rich history of our world in history classes.",
    icons: [
      <AddchartIcon className="ic" />,
      <AssuredWorkloadIcon className="ic" />,
      <CallToActionIcon className="ic" />,
    ],
  },
];

const Classes = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const pulse = () => {
      setActive(true);
    };
    pulse();
  }, []);
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });
  return (
    <div className="classesContainer">
      <div className="head">
        <h1>Our Classes</h1>
      </div>
      <hr className="hr" />

      <div className="classItems">
        {subjects.map((subject, index) => (
         
         <div className={`classItem${index + 1}`} key={index} ref={ref}>
  <h2 className={inView ? "h2" : ""}>
    {subject.title}{" "}
    <ArrowRightIcon className={active ? "ic pulse" : "ic"} />
  </h2>
  <p>{subject.description}</p>
  <div className="icons">{subject.icons}</div>
</div>
        ))}
      </div>

      <div className="buttondiv">
    <Button variant="contained" 
    style={{
      backgroundColor:`rgb(80,6,17)`,
      color:`white`,
     


    }}
    endIcon={<TrendingFlatIcon/>}
    
    >MORE</Button>
      </div>

      <hr className="hr" />
    </div>
  );
};

export default Classes;
