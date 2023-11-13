import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [clicked, setClicked] = useState(false);
  const [aclicked, setaClicked] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Add a click event listener to the document
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false);
        setaClicked(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    if (clicked) {
      setClicked(false);
    }
    if (aclicked) {
      setaClicked(false);
    }
  };

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./img/logo.png" alt="" />

          <div className="texts">
            <h2>His Grace Group of Schools</h2>
            <hr />
            <h4>Excellent Through Godliness</h4>
          </div>
        </div>
      </div>

      <div
        className={clicked ? "menu clicked" : "menu"}
        ref={menuRef} // Add a ref to the menu element
        onClick={handleClose}
      >
            <Link className="link" to="/">
              Home
            </Link>
           
              <div className="link" style={{cursor:`pointer`}} onClick={()=>{setaClicked(!aclicked)}}>
              About Us
              </div>
             
  {aclicked &&(
                  <div className="aboutOptions ">
                  <Link className="linked" to="/aboutwhy">
                   <div className="texts">
                   <p>Why Choose Us</p>
                  </div>
                  
                    <hr className="divide"/>
                    <div className="texts">
                      <Link className="linked" to="/aboutcode">
                    <p>Code of Conduct</p>
                    </Link>
                    </div>
                    <hr className="divide"/>
                    <div className="texts">
                      <Link className="linked" to="/abouthis">
                    <p>History</p>
                    </Link>
                    </div>
                
                   
                    </Link>
              
                  </div>
)}
            
              
     
           <div className="link" style={{cursor:`pointer`}} onClick={()=>{setClicked(!clicked)}}>
           Admissions
           </div>
             
             {clicked && (
          <div className="admissionOptions">
       <div>
           <div className="texts">
            <Link to="/nursery" className="linked">
           <p>NUSERY</p>
           </Link>
          </div>
          
            <hr className="divide"/>
            <div className="texts">
              <Link to="/primary" className="linked">
            <p>PRIMARY</p>
            </Link>
            </div>
            <hr className="divide"/>
            <div className="texts">
            <Link to="/admissionjunior" className="linked">
            <p>JUNIOR (Jss1 - Jss2)</p>
            </Link>
            </div>
        
           
            </div>
      
          </div>
       )}
            <Link className="link" to="/">
              Academics
            </Link>
           
            <Link className="link" to="/">
              Extra-Curriculum
            </Link>
            
          </div>

       
   
    </div>
  );
};

export default Navbar;
