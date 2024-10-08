import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import './styles.css';
const LandingPage = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    // Stagger the animation for each letter
    gsap.fromTo(
      lettersRef.current,
      { y: -300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "bounce.out", // Bounce effect on fall
        stagger: 0.08, // Delay between each letter falling
      }
    );
  }, []);
  return (
    <div className='container'>
     <div className="floor">
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className="floorcell"></div>
      <div className='mainText'>
        
            <div className="text-line">
            {"WELCOME TO".split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="letter line1"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          
    
          <div className="text-line">
            {"P.S.B.V.".split("").map((char, index) => (
              <span
                key={index + "psbv"}
                ref={(el) => (lettersRef.current[index + 10] = el)} // Adjust index
                className="letter line2"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

  
          <div className="text-line">
            {"PIPE & FITTING".split("").map((char, index) => (
              <span
                key={index + "pipe"}
                ref={(el) => (lettersRef.current[index + 18] = el)} // Adjust index
                className="letter line3"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
      </div>
     </div>
     {/* cylinders */}
     <div className="cylinder-stack">
      <div className="cylinder cylinder-top">
      <button className='btn'>ENTER</button>
      </div>
      <div className="cylinder cylinder-bottom">
      {/* <Typical 
     className="typingtext"
      steps={['The world of pipes', 2000, 'High-Quality Stainless Steel sphere', 2000]}
      loop={1}
      wrapper="p"
    /> */}
      </div>
    </div>
     {/* <div className='bottom'>
      <button className='btn'>ENTER</button>
     <Typical 
     className="typingtext"
      steps={['The world of pipes', 2000, 'High-Quality Stainless Steel sphere', 2000]}
      loop={1}
      wrapper="p"
    />
     </div> */}

  </div>
  )
}

export default LandingPage