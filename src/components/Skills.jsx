import React from 'react'
import style from '../css/skills.module.css'

function Skills() {
  return (
    <div className={style.skillMain} >
          <div className={style.skills} >
        <div className={style.heading}><h1>Skills</h1></div>
              <div className={style.skill}>
                  
                  <div className={style.frontend}>
                      <dl>
                          <dt>FrontEnd</dt>
                          <dd>React.js</dd>
                          <dd>Javascript</dd>
                          <dd>HTML</dd>
                          <dd>CSS</dd>
                        </dl>
                  </div>
                  <div className={style.backend}>
                    <dl>
                          <dt>BackEnd</dt>
                          <dd>Java</dd>
                          <dd>J2EE</dd>
                          <dd>Hibernate</dd>
                          <dd>Spring Boot</dd>
                    </dl>
                 </div>
                  <div className={style.tools}>
                    <dl>
                        <dt>Other tools</dt>
                      <dd>VS Code</dd>
                      <dd>Eclipse</dd>
                      <dd>Spring tool suit</dd>
                      <dd>Postman</dd>
                      <dd>git</dd>
                        </dl>
                </div> 
                  <div className={style.database}>
                        <dl>
                          <dt>Databse</dt>
                          <dd>MySql</dd>
                        </dl>
                    </div>
            
              </div>
          </div>
      <div className={style.projects}>
        <div className={style.heading}><h1>Projects</h1></div>
        <div className={style.content}>
        <div className={style.project}>
            <div className={style.cardImg}>
              <img src="ecom.jpg" alt="" />
            </div>
            <div className={style.lowerPart}>
              <h3>RealShop Online shop</h3>
              <div className={style.cardText}>An eCommerce project created using React.js It has fetures like product sorting ...</div>
              <a href="https://realshop-app.onrender.com" className={style.button}>Go Live</a>
              <a href="https://github.com/RohanSahu03/Realshop" className={style.button}>Github</a>
            </div>
        </div>
        <div className={style.project}>
            <div className={style.cardImg}>
              <img src="todo.jpg" alt="" />
            </div>
            <div className={style.lowerPart}>
              <h3>To-Do List App</h3>
              <div className={style.cardText}>A todo app where you can manage your todo list.</div>
              <a href="https://todo-app-bj3p.onrender.com" className={style.button}>Go Live</a>
              <a href="https://github.com/RohanSahu03/To-do-List" className={style.button}>Github</a>
            </div>
        </div>
        <div className={style.project}>
            <div className={style.cardImg}>
              <img src="joke.jpg" alt="" />
            </div>
            <div className={style.lowerPart}>
              <h3>Joke Generator</h3>
              <div className={style.cardText}>Random joke generator in which you can generate category wise joke.</div>
              <a href="https://rohansahu03.github.io/JokeGenerator_INBT03137_AUG2023/" className={style.button}>Go Live</a>
              <a href="https://github.com/RohanSahu03/JokeGenerator_INBT03137_AUG2023" className={style.button}>Github</a>
            </div>
        </div>
        </div>
      </div>
      <div className={style.web}>
        <div className={style.heading}><h1>Find me on the web</h1></div>
        <div className={style.linkedin}>
          <img src="linkedin.png" alt=""  />
          
          <a href="https://www.linkedin.com/in/rohan-kumar-sahu-b8b6071b4/">@rohan-kumar-sahu</a>
        </div>
        <div className={style.github}>
          <img src="github.png" alt="" />
       
          <a href="https://github.com/RohanSahu03">@RohanSahu03</a>
        </div>
        </div>
      </div>
   
  )
}

export default Skills