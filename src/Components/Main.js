import React, { useState } from 'react';
import './Styles/Main.scss';
import { Facebook, Instagram, LinkedIn, GitHub } from '@material-ui/icons';
import anu2 from './l/me.jpg'; // Importing 'anu2' image
import cv from './l/210369B CV.pdf';

const Main = () => {
    const [showCV] = useState(false);

    const handleHireMeClick = () => {
        window.open(cv, '_blank');
    };

    return (
        <div className='Main' style={{ backgroundColor: '#1e2235', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className='main__container'>
                <div className='main__content'>
                    <div className='text'>
                        <h1 style={{ fontSize: '80px' }}>Hello Everyone!</h1>
                        <br/>
                        <h4 style={{ fontSize: '30px' }}>I'm Lakshani Rasanjali Manamperi</h4>
                        <br/>
                        <br/>
                        <p style={{ fontSize: '18px' }}>2nd Year Undergraduate</p>
                        <p style={{ fontSize: '18px' }}>University of Moratuwa</p>
                        <br/>
                        <div className='icons'>
                            <a href="https://instagram.com/lakshanimana_" target="_blank" rel="noopener noreferrer">
                                <Instagram className="icon" style={{ marginRight: '10px', color: '#e4405f' }} />
                            </a>
                            <a href="https://facebook.com/LakshaniManamperi" target="_blank" rel="noopener noreferrer">
                                <Facebook className="icon" style={{ marginRight: '10px', color: '#3b5998' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/lakshani-m-0032aa240/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <LinkedIn className="icon" style={{marginRight: '10px',  color: '#0077b5' }} />
                            </a>
                            <a href="https://github.com/LRManamperi" target="_blank" rel="noopener noreferrer">
                                <GitHub name="icon" style={{ color: '#1da1f2' }} />
                            </a>
                        </div>
                        <br/>
                        <div className='buttons'>
                            <button className="button button-blue" onClick={handleHireMeClick}>View My CV</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <br/>
                        <br/>
                        <p>I am a passionate and dedicated undergraduate student at the University of Moratuwa. I have a strong interest in web development and design, and I enjoy creating user-friendly and visually appealing websites. In addition to my academic pursuits, I actively participate in various coding communities and attend workshops to enhance my skills.</p>
                        <p>My goal is to leverage my knowledge and skills to contribute to innovative projects and make a positive impact in the field of technology.</p>
                    </div>
                    
                </div>
                <div className='image-container'>
                    {showCV && <embed src={cv} type="application/pdf" width="100%" height="500px" />}
                    <img src={anu2} alt="Anu2" className="anu2-pic" />
                </div>
                
            </div>
            
        </div>
        
    );
};

export default Main;
