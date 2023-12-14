import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { TfiEmail } from "react-icons/tfi";
import { HiPhone } from "react-icons/hi2";
import style from '../css/content.module.css'
function ContentPage() {
  
  return (
    <div>
          <div className={style.mainDiv}>
          <section id={style.nav}>
              <article>

                  <div className={style.menu}>
                      

                  </div>

              </article>
          </section>
        <div className={style.content}>
                <article>
                      <p>
                         Hey folks, I am
                         </p>
                        <span className={style.txtChange}>
                  <h2>
                             ROHAN KUMAR SAHU
                      </h2>
                      </span>
                      <p>
                          <TypeAnimation
                              sequence={[
                                  // Same substring at the start will only be typed out once, initially
                                  'Full Stack Developer',
                                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                                  'Computer Science Engineer',
                                  2000,
                                  'Java Developer',
                                  2000
                                
                                  
                              ]}
                              wrapper="span"
                              speed={20}
                              style={{ display: 'inline-block' }}
                              repeat={Infinity}
                          />
                      </p>
                      <br />
                      <span className={style.intro}> <p>I am a computer science graduate with a passion for transforming code into meaningful and innovative solutions. Proficient in Java programming, I specialize in the art of crafting robust and efficient back-end systems that form the backbone of powerful applications.</p></span>
                      <span className={style.intro}> <p>
                          When it comes to the user interface, I'm your go-to person with expertise in React.js. 
                        </p></span>
                        <br />
                      <a className={style.anchor} href="https://drive.google.com/file/d/1dWi2Qw1tKmsomUNpxRhT8jb3fAuW6Kf7/view?usp=drivesdk">View Resume</a>
                </article>
                <article>
                        <div className={style.frame}>
                            <img src="myImg-removebg.png" alt=""/>
                        </div>
                        <div className={style.email}>
                          <TfiEmail /> &nbsp;&nbsp;sahurohankumar47@gmail.com
                        </div>
                      <div className={style.phone}>
                          <HiPhone /> &nbsp;&nbsp;7999380761
                      </div>
                      
                </article>
                 
        </div>
          </div>
    </div>
  )
}

export default ContentPage