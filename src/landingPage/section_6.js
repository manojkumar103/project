import React from 'react';
import '../CSS/landingPage/section_6.css';
import england from '../files/section_6/england.png';
import africa from '../files/section_6/africa.png';
import bangladesh from '../files/section_6/bangladesh.png';
import china from '../files/section_6/china.png';
import france from '../files/section_6/france.png';
import italy from '../files/section_6/italy.png';
import japan from '../files/section_6/japan.png';
import india from '../files/section_6/india.png';
import pakistan from '../files/section_6/pakistan.png';
import russia from '../files/section_6/russia.png';
import facebook from '../files/section_6/facebook.png';
import instagram from '../files/section_6/instagram.png';
import twitter from '../files/section_6/twitter.png';
import linkedin from '../files/section_6/linkedin.png';
import logo from '../files/logo.jpeg';

export const Section_6 = () => {
  return (
    <>
    <section className='section_6'>
    <div className='heading'>
        <h1>Multilingual</h1>
        <p>Ability to understand and generate  content in different countries</p>
        </div>
        <div className='country-container'>
            <img src={england} alt="image" className='england' />
            <img src={africa} alt="image" className='africa'/>
            <img src={bangladesh} alt="image" className='bangladesh' />
            <img src={china} alt="image" className='china'/>
            <img src={france} alt="image" className='france'/>
            <img src={italy} alt="image" className='italy'/>
            <img src={japan} alt="image" className='japan'/>
            <img src={india} alt="image" className='india'/>
            <img src={pakistan} alt="image" className='pakistan'/>
            <img src={russia} alt="image" className='russia'/>
            </div> 
            
            <div className='card-container'>
            <div className="card">
        <h1>Time to Launch Your Dream Landing Page</h1>
        <p>Build your website in minutes and get access to the only AI app made for small and big businesses.</p>
        <button>Get Started - It's Free</button>
        </div>
       </div>

       <div className='footer-container'>
        <div className='footer-left'>
        <img src={logo} alt="image" className='logo'/>
        <h3>Subscribe</h3>
        <p>join our newletter to stay updated on the features and realsese</p>
        <div className='input-container'>
        <input type="email" placeholder='enter your email'/>
        <button>Subscribe</button></div>
        <p>by Subscribing you agree to with our <u>privacy policy</u></p>
        </div>
        <div className='footer-middle'>
            <h3> product</h3><br/>
            <span>Ai Assiant</span><br/>
            <br/>
            <span>feature</span><br/>
            <br/>
            <span>pricing</span><br/>
            <br/>
            <span>website builder</span><br/>
            </div>
        <div className='footer-right'>
        <h3> company</h3><br/>
            <span>about</span><br/>
            <br/>
            <span>privacy  policy</span><br/>
            <br/>
            <span>support</span><br/>
            <br/>
            <span>team of service</span><br/>

        </div>
   </div>
   <div className='footer-bottom'>
   <div className='left'> 
    <p>@2023Liner .All right reserved</p>
   </div>
   <div className='right'>
    <img src={instagram} alt="image" className='insta'/>
    <img src={facebook} alt="image" className='facebook'/>
    <img src={twitter} alt="image" className='twitter'/>
    <img src={linkedin} alt="image" className='linkedin'/>

   </div>
    </div>
    </section>
    </>     
)
}

export default Section_6;