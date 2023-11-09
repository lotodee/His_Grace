import React from 'react'
import "./CatCard.scss"
import {Link} from "react-router-dom"

const CatCard = ({item}) => {
    
  return (
    <>

  <div className="catMainContainer">
    
    <div className="leftt lefttt">
      <div className="title">{item.title}</div>
      <div className="desc">{item.desc}</div>
    </div>

    <div className="rightt catright">
      <img src={item.img} alt="" />
    </div>
  
  </div>
 <hr className="underline" />
 
  </>
  )
}

export default CatCard