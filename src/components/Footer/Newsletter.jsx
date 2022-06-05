import React from 'react';
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 classsName="headtext__cormorant" style={{color:'#DCCA87',fontFamily:"var(--font-base)" , fontSize:"64px"}}>Subscribe To Our Newsletter</h1>
      <br />
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your Email Address' />
      <button type='button' className='custom__button'style={{background:'#DCCA87'}}>Subscribe</button>
    </div>
    
    
  </div>
);

export default Newsletter;
