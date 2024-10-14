import React from 'react';
import sec5image from '../files/sec5image.png';
import '../CSS/landingPage/section_5.css'

export const Section_5 = () => {
  return (
    <>
    <section className='section_5'>
        <div className='container'>
        <div className='first'>
            <h1>Interact</h1>
            <p>Easily add animations to any element. Apply<br/> simple animations using Liner presets, or build<br/> your own animations by customizing the<br/> animation type, speed and direction.</p>
            <button className='try-button'> Try it Now</button>
            </div>
            <div className='first-image'>
            <img src={sec5image} alt="image"/>
        </div>
        </div>

    </section>
    </>
  )
}

export default Section_5;