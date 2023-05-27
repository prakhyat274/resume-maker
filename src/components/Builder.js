import React, { useState } from 'react'

export default function Builder() {
  const [dropdown, SetDropDown] = useState({
    "personalInformation": false,
    "education": false,
    "skill": false,
    "experience": false,
    "project": false,
  })

  const handleOpenDropDown = (key) =>{
    const currentValue = dropdown[key];
    const dropmenu = key;
    SetDropDown({
      ...dropdown,
      [dropmenu]: !currentValue
    })
  }

  return (
    <div className='form' style={{minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}> 
      <h1>Enter Fields</h1>
      <div className='dropMenu'>
        <div className='formDropdown' onClick={()=>handleOpenDropDown("personalInformation")}><h1 style={{fontWeight:"lighter"}}>Personal Information</h1></div>
        <div className={`droppedForm ${dropdown["personalInformation"]?"open":""}`}>
          <div><h3>Full Name</h3>
          <input type="text" placeholder='Your Full Name'/></div>
          
          <div style={{marginTop:"20px"}}><h3>Phone Number</h3>
          <input type="text" placeholder='Your Phone Number'/></div>
          
          <div style={{marginTop:"20px"}}><h3>Email Address</h3>
          <input type="text" placeholder='Your Email Address'/></div>
        </div> 
      </div>

      <div className='dropMenu'>
      <div className='formDropdown' onClick={()=>handleOpenDropDown("education")}><h1 style={{fontWeight:"lighter"}}>Education Background</h1></div>
      <div className={`droppedForm ${dropdown["education"]?"open":""}`}>
        <textarea id="" cols="50" rows="10" placeholder='Enter Here'></textarea>
      </div>
      </div>


      <div className='dropMenu'>
      <div className='formDropdown' onClick={()=>handleOpenDropDown("skill")}><h1 style={{fontWeight:"lighter"}}>Skills</h1></div>
      <div className={`droppedForm ${dropdown["skill"]?"open":""}`}>
        <textarea id="" cols="50" rows="10" placeholder='Enter Here'></textarea>
      </div>
      </div>


      <div className='dropMenu'>
      <div className='formDropdown' onClick={()=>handleOpenDropDown("experience")}><h1 style={{fontWeight:"lighter"}}>Work Experience</h1></div>
      <div className={`droppedForm ${dropdown["experience"]?"open":""}`}>
        <textarea id="" cols="50" rows="10" placeholder='Enter Here'></textarea>
      </div>
      </div>


      <div className='dropMenu'>
      <div className='formDropdown' onClick={()=>handleOpenDropDown("project")}><h1 style={{fontWeight:"lighter"}}>Project</h1></div>
      <div className={`droppedForm ${dropdown["project"]?"open":""}`}>
        <textarea id="" cols="50" rows="10" placeholder='Enter Here'></textarea>
      </div>
      </div>
    </div>
  )
}
