import React, { useState } from 'react'
import AdmissionJuniorHead from '../../../components/Admisionss/AdmissionJunior/AdmissionJuniorHead'
import HowToApply from '../howtoapply/HowToApply'
import "./AdmissionJuniorPage.scss"
const AdmissionJuniorPage = () => {

  return (
   <div className="adminjuniorcontainer">
    <AdmissionJuniorHead />
  
    <div className="adminjContainer">
      <div className="top">
        <img src="img/jsssecimg.avif.avif" alt="" />
      </div>
      <div className="adminbottom">
        <div className="adminjj">
          <h2>Admission to jss1 and jss2</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel mollitia temporibus ipsa similique doloribus unde eligendi. Asperiores minima voluptatibus eveniet, suscipit temporibus inventore quis itaque tempora, sunt optio porro impedit aspernatur omnis animi molestiae. Voluptatem at, consectetur unde nam optio dicta, officia atque mollitia quia eligendi alias aut accusamus, beatae eius nulla tempora! Suscipit placeat quis quibusdam harum repellat sequi consectetur ipsam sint nesciunt eligendi quia qui debitis enim fugit, a rerum numquam molestias corporis. Rem voluptatibus dicta delectus dolore optio earum voluptas doloribus cum voluptate autem repudiandae animi voluptates, reiciendis corporis quos obcaecati veritatis similique illum quae ut laboriosam!</p>
        </div>
      </div>
 
    </div>
    <HowToApply/>
   </div>
  )
}

export default AdmissionJuniorPage
