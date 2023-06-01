import React from 'react'
import './home.css'

export default function Home(){
    return(
        <>
        <div className='header' style={{backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7),rgba(4, 9, 30, 0.7)),url("/ui/headerBack.jpg")`}}>
            <h1 style={{color: "white"}}>The CV that gets the job (done)</h1>
            <p>Standing out. Professional. Recruiter-approved. Ready in minutes with our step-by-step builder.</p>
            <a className="btn" href='/builder'>Build My Resume</a>
        </div>
        <div className='headerDetail'>
            <h1>Templates to win recruiters over</h1>
            <p>Wide selection of designs. Carefully optimised for clarity and impact.<br/>One click layouts - no formatting required.</p>
            <div className='templateDisplay'>
                <img src="/ui/templateBlack.png" alt="Template Display 1" />
                <img src="/ui/templateBlue.jpg" alt="Template Display 2" />
                <img src="/ui/templateGreen.jpg" alt="Template Display 3" />
            </div>
            <p>More Templates Soon</p>
        </div>
        <div style={{margin: "0 100px", padding: "50px 0",backgroundColor: "lightgrey"}}>
            <h1 style={{textAlign:"center", paddingBottom: "100px"}}>Easiest and most feature-packed CV builder available</h1>
            <div className='headerFeatures'>
                <div className='featureCard'>
                    <img src="/ui/step_logo.jpg" alt="Feature 1" />
                    <h2>Step-by-Step builder</h2>
                    <p>Easy to use step-by-step builder enables you to create a well-polished, professional CV in minutes. Impress. Save time.</p>
                </div>
                <div className='featureCard'>
                    <img src="/ui/temp_logo.png" alt="Feature 2" />
                    <h2>Choose a Template</h2>
                    <p>Wide selection of designs. Carefully optimised for clarity and impact. One click layouts - no formatting required.</p>
                </div>
                <div className='featureCard'>
                    <img src="/ui/down_logo.png" alt="Feature 3" />
                    <h2>Download Resume</h2>
                    <p>No limit on the number of CVs you can create. Unlimited printing and downloading in PDF.</p>
                </div>
            </div>
        </div>
        </>
    )
}
