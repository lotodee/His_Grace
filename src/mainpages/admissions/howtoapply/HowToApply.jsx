import React from 'react';
import { Link } from 'react-router-dom';
import "./HowToApply.scss";

const HowToApply = () => {
  return (
    <div className="howContainer">
      <div className="howtoText">
        <p>HOW TO APPLY</p>
      </div>
      <div className="ways">
        <div className="info">
          <p>
            There are two ways to apply, as explained in detail below. Carefully read and follow the instructions listed for your preferred method of application.
          </p>
        </div>
        <div className="hardcopy">
          <div className="hardtext">
            HARDCOPY APPLICATION
          </div>
          <div className="hardlist">
            <p>The hardcopy method of application requires you to download the application form.</p>
            <ul>
              <li>
                <span>Step 1</span>
                <p>Click the button below that says <b>Download Form</b></p>
              </li>
              <li>
                <span>Step 2</span>
                <p>Print out the document and fill out all fields.</p>
              </li>
              <li>
                <span>Step 3</span>
                <p>Scan the completed document and send it to our <b>Email:</b> lolamidotun@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="softcopy">
          <div className="softtext">
            SOFTCOPY APPLICATION
          </div>
          <div className="softlist">
            <p>For the softcopy method of application:</p>
            <ul>
              <li>
                <span>Step 1</span>
                <p>Click the button below that says <b>Fill Form</b></p>
              </li>
              <li>
                <span>Step 2</span>
                <p>You will be redirected to a page to fill out the form carefully and submit it.</p>
              </li>
              <li>
                <span>Step 3</span>
                <p>Expect a reply from us on your submitted contact information in the form.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <Link to="/admissionform">
            <button className="btnfill">Fill Form</button>
          </Link>
          <button className="btndownload">
            <a href="img/test.pdf" download={"test"} style={{
              textDecoration: 'none',
              color: 'inherit'
            }}>Download Form</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowToApply;
