import React from 'react'
import './builder.css'

export default function Builder(props) {
  props.onLinkClick("other")
  return (
    <div className='builderPage'>
      <div className='customise'>
        <div className='customiseCard'>
          <button className='infoTab'>Personal Information</button>
          <button className='infoTab'>Summary</button>
          <button className='infoTab'>Education</button>
          <button className='infoTab'>Skills</button>
          <button className='infoTab'>Projects</button>
          <button className='infoTab'>Work Experience</button>
          <button className='infoTab'>Interests</button>
        </div>
        <div className='detailTab'>
          <h3 style={{margin:"10px 5px"}}>Personal Information</h3>
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

          {/* Summary Section */}
          <h3 style={{margin:"10px 5px"}}>Summary</h3>
          <div className='inputField'>
            <textarea placeholder='Tell us about yourself'></textarea>
          </div>

          {/* Education Section */}
          <h3 style={{margin:"10px 5px"}}>Education</h3>
          <div className='inputField'>
            <label>Education Title</label>
            <input type='text' placeholder='e.g XYZ College, Major Computer Science'/>
            <label>Education Summary</label>
            <textarea placeholder='e.g 2023 Grad, 5 GPA....'></textarea>
            <button className='addButton infoTab'>Add +</button>
          </div>

          {/* Skill Section */}
          <h3 style={{margin:"10px 5px"}}>Skills</h3>
          <div className='inputField'>
            <input type="text" placeholder='Enter Skill Title'/>
            <input type="text" placeholder='Enter Skill Title'/>
            <input type="text" placeholder='Enter Skill Title'/>
            <button className='addButton infoTab'>Add +</button>
          </div>

          {/* Project Section */}
          <h3 style={{margin:"10px 5px"}}>Projects</h3>
          <div className='inputField'>
            <label>Project Title</label>
            <input type='text' placeholder='Enter Here'/>
            <label>Project Summary</label>
            <textarea placeholder='Describe your Project'></textarea>
            <button className='addButton infoTab'>Add +</button>
          </div>

          {/* Experience Section */}
          <h3 style={{margin:"10px 5px"}}>Work Experience</h3>
          <div className='inputField'>
            <label>Job Title</label>
            <input type='text' placeholder='Enter Here'/>
            <label>Job Summary</label>
            <textarea placeholder='Describe your Work'></textarea>
            <button className='addButton infoTab'>Add +</button>
          </div>

          {/* Interest Section */}
          <h3 style={{margin:"10px 5px"}}>Interests</h3>
          <div className='inputField'>
            <input type="text" placeholder='Enter Your Interest'/>
            <input type="text" placeholder='Enter Your Interest'/>
            <input type="text" placeholder='Enter Your Interest'/>
            <button className='addButton infoTab'>Add +</button>
          </div>
        </div>
      </div>
      <div className='prview'></div>
    </div>
  )
}
