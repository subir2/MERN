import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import BusinessIcon from '@mui/icons-material/Business';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Contact Us</h4>
        <br></br>
        <ContactPhoneIcon className="phoneSvgIcon"/><p>01770-191336</p>
        <br></br>
        <BusinessIcon className="bSvgIcon"/><p>Mirpur 10, Dhaka, Bangladesh, 1216</p>
       
        
        
      </div>

      <div className="midFooter">
        <h1>Redlubbers</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights&copy; Redlubbers</p>
      </div>

      <div className="rightFooter">
      <h3>Follow Us</h3>
   
        <a
              href="https://www.facebook.com/RedLubbers"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

      </div>
    </footer>
  );
};

export default Footer;