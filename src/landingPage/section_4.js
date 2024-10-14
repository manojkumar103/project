import React from 'react';
import '../CSS/landingPage/section_4.css';
import sec4person from '../files/sec4person.png';
import sec4image from '../files/sec4image.png';
import sec4image1 from '../files/sec4image1.png';
import sec4image2 from '../files/sec4image2.png';
import icon3 from '../files/icon3.png';
import sec4share from '../files/sec4share.png';
import sec4darkmode from '../files/sec4darkmode.png';
import sec4comment from '../files/sec4comment.png';
import sec4arrow from '../files/sec4arrow.png';


export const Section_4 = () => {
  return (
  <>
  <section className='section_4'>
    
    <div className='text'>
  <h1>Innovative features for Even<br/>More Efficiency</h1>
  <p>Designed to save you hours of works in the long run</p>
</div>
<div className='body1'>
<div className='first-container'>
<div className='icon1'>
  <img src={sec4person} alt="icon"/>
  <h1>Collaborate in real time</h1>
  <p>work in real time alongside in your team and invite<br/> stakeholders to review and feedback on your <br/>design ideas</p>
</div>
<div className='image'>
  <img src={sec4image} alt="image"/> 
</div>
</div>
</div>
{/* <div className='body2'> */}
<div className='second-container'>
  <div className='share-icon'>
    <img src={sec4share} alt="icon"/>
    <h1>Share in space</h1>
    <p>Liner into spaces that you invite and <br/>share with collegues and friends.</p>
    <img src={sec4image1} alt="image" className='shareimage'/>
  </div>
  <div className='refresh-icon'>
    <img src={icon3} alt="icon"/>
    <h1>Find your perfect design</h1>
    <p>Look at the page and sections desgins that are<br/> created and pick the one</p>
    <img src={sec4image2} alt="image" className='refresh-image'/>
  </div>
</div>
{/* </div> */}

<div className='icons'>
        <div className='icon1'>
       <img src={sec4darkmode} alt='icon'/>
       <h3>Effortless One-Click Creation</h3>
       <span>Save time and energy by generating beautiful<br/> landing pages within minutes, allowing you to<br/> focus on growing your business.</span>
       </div>
       <div className='icon2'>
       <img src={sec4comment} alt='icon'/>
       <h3>Easy to use editor</h3>
       <span>Use our drag-and-drop editor to create unique<br/> designs using hundreds of prebuilt templates<br/> and elements.</span>
       </div>
      <div className='icon3'>
       <img src={sec4arrow} alt='icon'/>
       
       <h3>High-Quality, Copyright-Free Images</h3>
       <span>Enhance your landing pages with visually stunning,<br/> royalty-free images that perfectly represent<br/> your brand and captivate your audience.</span>
        </div>
        </div>
</section>

  </>
  )
}

export default Section_4;
