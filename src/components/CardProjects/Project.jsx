import React from 'react'
import "./ProjectCard.scss"
import {Link} from "react-router-dom"
const Project = ({item}) => {
    console.log(item)
    return (
 <Link to="/" className='link'>
      <div className="projectCard" style={{backgroundImage:`${item.img}`}}>

    <img src= {item.img} alt="" />
        <div className="info">
           <Link className='linked' to={item.link}>
        
            <div className="texts">
                <h2>{item.cat}</h2>
                
               <h4>{item.id}</h4>
                <span>{item.username}</span>
            </div>
            </Link>
        </div>
      </div>
      </Link>
      )
}

export default Project