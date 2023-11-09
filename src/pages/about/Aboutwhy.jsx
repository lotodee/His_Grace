import React from "react";
import Featured from "../../components/featured/Featured";
import "./About.scss";
import Divider from '@mui/material/Divider';
import FourPillars from "../../components/fourpillars/FourPillars";
import { useMediaQuery } from "../../useMediaQuery";
const AboutWhy = () => {

  const isSmallScreen = useMediaQuery('(max-width:1000px)')
  isSmallScreen && console.log("small")
  return (
    <div className="mainContainerr">
    
        <div className="topp">
          <div className="imagee">
            <img src="/img/kids.webp" alt="" />
            <div className="titlecontainerr">
              <div className="textt">WHY CHOOSE US</div>
            </div>
          </div>
        </div>
 

      <div className="bottom">
        <div className={!isSmallScreen ? "bottomup" : "bottomupres"}>
          <div className={!isSmallScreen ? "bottomupleft" : "bottomupleftres"}>
            <img src="/img/imgg/2.jpeg" alt="" />
          </div>
          <div className={!isSmallScreen ? "bottomupright" :"bottomuprightres"}>
          <div className={!isSmallScreen ? "text" : "textres"}>
  <p className={!isSmallScreen ? "texthead" : "textheadres"}>Proprietor: <span>Pst.Kolapo</span></p>
  <p className={!isSmallScreen ? "textbody" : "textbodyres"}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. luta facere! Nihil quo commodi repellendus deleniti
    aspernatur, a repellat nemo est ab? Minus sed aliquid aspernatur doloribus aliquam repellat, ad quas inventore,
    quidem ea libero officia so atque maxime recusandae. facere! Nihil quo commodi repellendus deleniti aspernatur,
    a repellat nemo est ab? Minus sed aliquid aspernatur doloribus aliquam repellat, ad quas inventore, quidem ea
    libero officia so atque maxime recusandae.
  </p>
</div>

          </div>
        </div>
        <div className="bottomlow">
           <FourPillars/>
        </div>
      </div>
    </div>
  );
};

export default AboutWhy;
