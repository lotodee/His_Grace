import React from 'react'
import "./AboutHis.scss"
const AboutHis = () => {
  return (
    <div className="mainContainer">
         <div className="top">
        <div className="image">
          <img src="img/abouthisimgmain.jpeg" alt="" />
          <div className="titlecontainer">
            <div className="text">HISTORY</div>
          </div>
        </div>
      </div>
      <div className="bottomup">
          <div className="bottomupleft">
            <img src="/img/imgg/2.jpeg" alt="" />
          </div>
          <div className="bottomupright">
            <div className="text">
              <p className="texthead">Proprietor:  <span>Pst.Kolapo</span> </p>
              <p className="textbody">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. luta
             
                facere! Nihil quo commodi repellendus deleniti aspernatur, a
                repellat nemo est ab? Minus sed aliquid aspernatur doloribus
                aliquam repellat, ad quas inventore, quidem ea libero officia so
                atque maxime recusandae. facere! Nihil quo commodi repellendus 
                deleniti aspernatur, a
                repellat nemo est ab? Minus sed aliquid aspernatur doloribus
                aliquam repellat, ad quas inventore, quidem ea libero officia so
                atque maxime recusandae.
              </p>
   <hr style={{height:`0px`,backgroundColor:`grey`}}/>
              <p>Text about the owner of the schooll</p>
            </div>
          </div>
        </div>
        <div className="last">
        <div className="aboutCodeContainer">
      <div className="top">
        <img src="img/abouthissecimg.avif.avif" alt="" />
      </div>
      <div className="bottomcode">
        <div className="conductContainer">
          <h2>OUR RICH HISTORY</h2>
          <p>
            At our school, we uphold a high standard of conduct to create a safe, respectful, and inclusive environment for all students and staff. We expect everyone to adhere to the following principles:
          </p>
          <ol>
            <li>
            Founded in [Year], our school has a deep and illustrious history that spans generations. Our commitment to education and excellence has been unwavering since the very beginning.
            </li>
            <li>
            Over the years, our institution has been a hub of knowledge and a nurturing ground for future leaders, scholars, and visionaries. Our journey is marked by numerous achievements and milestones.
            </li>
            <li>
            We take great pride in the dedicated educators, diligent students, and supportive community that have shaped our school's legacy. From the early days of our founding to the present, our commitment to academic excellence, character development, and community engagement has remained a cornerstone of our identity.
            </li>
           
            <li>
            As we continue to embrace the challenges and opportunities of the modern world, we draw strength from our rich history, using it as a guide to inspire and empower the leaders of tomorrow.

            </li>
          </ol>
          <p>
          Enforcing conduct standards ensures a harmonious learning atmosphere, fostering growth and respect among all members of the community.
          </p>
        </div>
      </div>
 
    </div>
        </div>
    </div>
  )
}

export default AboutHis
