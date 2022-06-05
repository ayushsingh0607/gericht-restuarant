import React from 'react';
import {FiFacebook , FiInstagram , FiTwitter} from 'react-icons/fi';
import {Newsletter} from '../../components';
import { SubHeading } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__bg app__footer section__padding'>
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <h1 className='headtext__cormorant'style={{textTransform:'uppercase'}}>Gerícht</h1>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the<br/> service of others.”</p>
        <SubHeading />
        <div className='app__footer-links_logo-icon'>
        <FiFacebook  />
        <FiTwitter  />
        <FiInstagram  />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:<br />08:00 am -12:00 am</p>
        <br />
        <p className='p__opensans'>Saturday-Sunday:<br/>07:00am -11:00 pm</p>
        
        </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'style={{marginTop:'3rem'}}>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
