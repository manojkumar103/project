import React from 'react';
import '../CSS/landingPage/section_1.css';
import logo from '../files/logo.jpeg';
import icon1 from '../files/icon1.png';
import icon2 from '../files/icon2.png';
import icon3 from '../files/icon3.png';
import icon4 from '../files/icon4.png';


 const Section_1 = () => {
  return (
   <>
   {/* nav */}
   <section className="section_1">
    <header>
        <div className="logo">
            <img src={logo} alt="Liner Logo"/>
            <span>Liner</span>
        </div>
        <nav>
            <a href="#">Templates</a>
            <a href="#">Community</a>
            <a href="#">Tools</a>
            <a href="#">Pricing</a>
        </nav>
        <div className="login">
            <button>Login</button>
        
        </div>
    </header>

    <main>
        <div className="hero">
            <div className="icon-container">
                <img src={logo}  alt="AI Design Icon" className="center-icon"/>
                <img src={icon1}  alt="Icon 1" className="icon"/>
                <img src={icon2}  alt="Icon 2" className="icon"/>
                <img src={icon3}  alt="Icon 3" className="icon"/>
                <img src={icon4}  alt="Icon 4" className="icon"/>
            </div>
            <br/>
            <br/>
            <h1>Transform Text to Design in Minutes, Powered by AI</h1>
            <p>Generate beautiful and editable web designs from a simple text description. It empowers you to design faster than ever.</p>
            <a href="#" className="generate">Generate Your Website</a>
        </div>
    </main>
    </section>
   </>
  )
}

export default Section_1;