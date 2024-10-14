import React from 'react';
import '../CSS/landingPage/section_3.css';
import samsung from '../files/samsung.png';
import tesla from '../files/tesla.png';
import decathlon from '../files/decathlon.png';
import ibm from '../files/ibm.png';
import slack from '../files/slack.png';
import dropbox from '../files/dropbox.png';
import sec3 from '../files/sec3.png';
import icon2 from '../files/icon2.png';
import icon1 from '../files/icon1.png';
import pictureicon from '../files/pictureicon.png';

export const Section_3 = () => {
  return (
    <>
    <section className="section_3">
    {/* <div className="brands-section"> */}
    <p className='header'>560,065+ websites created by Liner 🚀</p>

    <div className="brand-logos">
       {/* <img src={samsung1} alt='image' className='samsung'/>
       <img src={tesla} alt='image' className='tesla'/>
       <img src={Decathlon} alt='image' className='Decathlon'/>
       <img src={IBM} alt='image' className='ibm'/>
       <img src={forbes} alt='image' className='forbes'/>
       <img src={slack} alt='image' className='slack'/>
       <img src={dropbox} alt='image' className='dropbox'/>
       <img src={cococola} alt='image' className='cococola'/> */}
       <img src={samsung} alt='image'/>
       <img src={tesla} alt='image' />
       <img src={decathlon} alt='image'/>
       <img src={ibm} alt='image' />
       {/* <img src={forbes} alt='image'/> */}
       
       {/* <img src={cococola} alt='image'/> */}
    </div>
    <div className='brand-logos1'>
    <img src={slack} alt='image'/>
    <img src={dropbox} alt='image'/>

    </div>
    
    <div className='flex-container'>
      <div className='image'>
       <img  src={sec3} alt='image' />
       </div>
       <div className='text'>
       <h1>The AI-powered <br/>Website Builder</h1>
       <h2>customize your site,multiple pages and<br/>build-in components.No code required</h2>
       <button >Generate your Website</button>
       </div>
       </div>
       {/* icons */}
       <div className='icons'>
        <div className='icon1'>
       <img src={icon2} alt='icon'/>
       <h3>Effortless One-Click Creation</h3>
       <span>Save time and energy by generating beautiful<br/> landing pages within minutes, allowing you to<br/> focus on growing your business.</span>
       </div>
       <div className='icon2'>
       <img src={icon1} alt='icon'/>
       <h3>Easy to use editor</h3>
       <span>Use our drag-and-drop editor to create unique<br/> designs using hundreds of prebuilt templates<br/> and elements.</span>
       </div>
      <div className='icon3'>
       <img src={pictureicon} alt='icon'/>
       
       <h3>High-Quality, Copyright-Free Images</h3>
       <span>Enhance your landing pages with visually stunning,<br/> royalty-free images that perfectly represent<br/> your brand and captivate your audience.</span>
        </div>
        </div>
       {/* </div> */}
       

    
{/* </div> */} 

    </section>
    
    </>
  )
 
}

export default Section_3;