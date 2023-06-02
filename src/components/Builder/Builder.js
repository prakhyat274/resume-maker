import React, { useState } from 'react'
import './builder.css'

export default function Builder(props) {
  props.onLinkClick("other")
  const [inputTab,setInputTab] = useState("personal")

  const onInfoTabClick = (inputTabValue) =>{
    setInputTab(inputTabValue)
  }

  return (
    <div className='builderPage'>
      <div className='customise'>
        <div className='customiseCard'>
          <button onClick={()=>onInfoTabClick("personal")}className = "infoTab" >Personal Information</button>
          <button onClick={()=>onInfoTabClick("summary")}className = "infoTab" >Summary</button>
          <button onClick={()=>onInfoTabClick("education")}className = "infoTab" >Education</button>
          <button onClick={()=>onInfoTabClick("skill")}className = "infoTab" >Skills</button>
          <button onClick={()=>onInfoTabClick("project")}className = "infoTab" >Projects</button>
          <button onClick={()=>onInfoTabClick("work")}className = "infoTab" >Work Experience</button>
          <button onClick={()=>onInfoTabClick("interest")}className = "infoTab" >Interests</button>
        </div>
        <div className='detailTab'>
          <div className={`${inputTab === "personal"?"active":"hidden"}`}>
            <h3>Personal Information</h3>
            <div className='inputField'>
              <label>Full Name</label>
              <input type="text" placeholder='Full Name'/>
            </div>
            <div className='inputField'>
              <label>Phone Number</label>
              <input type="text" placeholder='Enter Phone Number'/>
            </div>
            <div className='inputField'>
              <label>LinkedIn</label>
              <input type="text" placeholder='LinkedIn Username'/>
            </div>
          </div>

          {/* Summary Section */}
          <div className={`${inputTab === "summary"?"active":"hidden"}`}>
            <h3>Summary</h3>
            <div className='inputField'>
              <textarea placeholder='Tell us about yourself'></textarea>
            </div>
          </div>

          {/* Education Section */}
          <div className={`${inputTab === "education"?"active":"hidden"}`}>
            <h3>Education</h3>
            <div className='inputField'>
              <label>Education Title</label>
              <input type='text' placeholder='e.g XYZ College, Major Computer Science'/>
              <br />
              <label>Education Summary</label>
              <textarea placeholder='e.g 2023 Grad, 5 GPA....'></textarea>
            </div>
            <button className='addButton'>Add +</button>
          </div>

          {/* Skill Section */}
          <div className={`${inputTab === "skill"?"active":"hidden"}`}>
            <h3>Skills</h3>
            <div className='inputField'>
              <input type="text" placeholder='Enter Skill Title'/></div>
            <div className='inputField'>
              <input type="text" placeholder='Enter Skill Title'/></div>
            <div className='inputField'>
              <input type="text" placeholder='Enter Skill Title'/></div>
              <button className='addButton'>Add +</button>
          </div>

          {/* Project Section */}
          <div className={`${inputTab === "project"?"active":"hidden"}`}>
            <h3>Projects</h3>
            <div className='inputField'>
              <label>Project Title</label>
              <input type='text' placeholder='Enter Here'/>
              <br />
              <label>Project Summary</label>
              <textarea placeholder='Describe your Project'></textarea>        
            </div>
            <button className='addButton'>Add +</button>
          </div>

          {/* Experience Section */}
          <div className={`${inputTab === "work"?"active":"hidden"}`}>
            <h3>Work Experience</h3>
            <div className='inputField'>
              <label>Job Title</label>
              <input type='text' placeholder='Enter Here'/>
              <br />
              <label>Job Summary</label>
              <textarea placeholder='Describe your Work'></textarea>
            </div>
            <button className='addButton'>Add +</button>
          </div>

          {/* Interest Section */}
          <div className={`${inputTab === "interest"?"active":"hidden"}`}>
            <h3>Interests</h3>
            <div className='inputField'>
              <input type="text" placeholder='Enter Your Interest'/></div>
            <div className='inputField'>
              <input type="text" placeholder='Enter Your Interest'/></div>
            <div className='inputField'>
              <input type="text" placeholder='Enter Your Interest'/>
            </div>
              <button className='addButton'>Add +</button>
          </div>

        </div>
      </div>
      <div className='preview'></div>
    </div>
  )
}
