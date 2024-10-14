import React from 'react';
import '../CSS/landingPage/section_2.css';
import icon4 from '../files/icon4.png';
import left from '../files/left.png';
import right from '../files/right.png';
import middle from '../files/middle.png';

export const Section_2 = () => {
  return (
    <>
      <section className="section_2">
        
        <br/>
        <br/>
        <h1>playground</h1>
        <div className="input-container">
        <img src={icon4}  alt="Icon 4" className="icon"/> 
          <input type="text" className="input" placeholder="Create a stunning photography image" />
          <button className="generate-btn">Generate</button>
          {/* <img src={icon4}  alt="Icon 4"/> */}
        </div>

        <div className='image-container'>
          {/* <img src={icon4}  alt="Icon 4" className="icon"/>
          <img src={left}   alt="image" className='image-left'/>
          <img src={right}   alt="image" className='image-right'/>
          <img src={middle}   alt="image" className='image-middle'/> */}
          
          <img src={left}   alt="image" className='left-img'/>
          <img src={middle}   alt="image"/>
          <img src={right}   alt="image" className='right-img' />
          
        </div>
      </section>
    </>
  );
}

export default Section_2;
