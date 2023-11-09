import React from 'react';
import "./Fourpillars.scss";

const FourPillars = () => {
  return (
    <div className="container">
      <div className="fourpillars">
        <div className="toop">
          <p>Our Core Values</p>
        </div>
        <div className="bottomm">
          <div className="p1">
            <img src="/img/imgg/discipline.avif.avif" alt="Discipline Image" />
            <p className="p1text">Discipline</p>
            <hr className='divide' />
            <p>We take pride in discipline because it's the foundation of our learning community. It's the dedication to following rules, being punctual, and maintaining a structured environment that fosters a focused and respectful atmosphere.</p>
          </div>
          <div className="p2">
            <img src="/img/imgg/trust.avif.avif" alt="Trust Image" />
            <p className="p2text">Trust</p>
            <hr className='divide' />
            <p>Trust is a core pillar of our school. We trust each other to collaborate, communicate, and learn together. It's the confidence that we have in our fellow students, teachers, and staff that makes our school a supportive and inclusive community.</p>
          </div>
          <div className="p3">
            <img src="/img/imgg/hardwork.jpeg" alt="Hardwork Image" />
            <p className="p3text">Hard Work</p>
            <hr className='divide' />
            <p>We celebrate hard work because it's the driving force behind our achievements. It's the relentless effort we put into our studies and extracurricular activities that leads to success. We understand that dedication and determination pay off in the long run.</p>
          </div>
          <div className="p4">
            <img src="/img/imgg/ethics.avif.avif" alt="Ethics Image" />
            <p className="p4text">Ethics</p>
            <hr className='divide' />
            <p>Ethics are at the heart of our school's culture. We value integrity, honesty, and moral principles. Upholding ethical standards ensures that our actions are fair, respectful, and responsible. We strive to do what is right in all situations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourPillars;
