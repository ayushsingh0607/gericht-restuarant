import React from 'react';
import {BsInstagram , BsArrowRightShort , BsArrowLeftShort} from 'react-icons/bs';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Gallery.css';
 
const image=[images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04]

const Gallery = () => {
  const scrollRef=React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'left'){
      current.scrollLeft -=300;
    }
    else {
      current.scrollLeft +=300;
    }

  }
  

  

  return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type="button" className='custom__button' style={{background: '#DCCA87'}}>View More</button>
    </div> 
    <div className='app__gallery-images'>
      
      <div className='app__gallery-images_container' ref={scrollRef}>
        {image.map((image , index) => (
          <div className='app__gallery-images_card flex__center' key={`image-${index + 1}`}> 
          <img src={image} alt="gallery" />
          <BsInstagram className="app__gallery-images_icon" />
          </div>
        ) )}

      </div>
      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='app__gallery-images_arrow-icon' onClick={() =>scroll('left')} />
        <BsArrowRightShort className='app__gallery-images_arrow-icon' onClick={() => scroll('right')} />
      </div>
      </div> 
    
  </div>
  );
}

export default Gallery;
