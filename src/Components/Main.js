import React, { useState } from 'react';
import './Styles/Main.scss';
import { Facebook, Instagram, LinkedIn, GitHub, Web, Code, ControlCamera, Build } from '@material-ui/icons';
import anu2 from './l/me.jpg'; // Importing 'anu2' image
import rasa from './l/u.jpg'; // Importing 'rasa' image
import cv from './l/210369B CV.pdf';
import pythonlogo from './l/icons8-python-50.png';
import clogo from './l/icons8-c-50.png';
import reactlogo from './l/icons8-react-80.png';
import nodelogo from './l/icons8-nodejs-32.png';
import jslogo from './l/icons8-javascript-logo-50.png';
import java from './l/icons8-java-logo-100.png';
import mondb from './l/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png';

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
                        <br />
                        <h4 style={{ fontSize: '30px' }}>I'm Lakshani Rasanjali Manamperi</h4>
                        <br />
                        <br />
                        <p style={{ fontSize: '18px' }}>2nd Year Undergraduate</p>
                        <p style={{ fontSize: '18px' }}>University of Moratuwa</p>
                        <br />
                        <div className='icons'>
                            <a href="https://instagram.com/lakshanimana_" target="_blank" rel="noopener noreferrer">
                                <Instagram className="icon" style={{ marginRight: '10px', color: '#e4405f' }} />
                            </a>
                            <a href="https://facebook.com/LakshaniManamperi" target="_blank" rel="noopener noreferrer">
                                <Facebook className="icon" style={{ marginRight: '10px', color: '#3b5998' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/lakshani-m-0032aa240/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <LinkedIn className="icon" style={{ marginRight: '10px', color: '#0077b5' }} />
                            </a>
                            <a href="https://github.com/LRManamperi" target="_blank" rel="noopener noreferrer">
                                <GitHub className="icon" style={{ color: '#1da1f2' }} />
                            </a>
                        </div>
                        <br />
                        <div className='buttons'>
                            <button className="button button-blue" onClick={handleHireMeClick}>View My CV</button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="about-me">
                    <h2 style={{ color: '#4c6e50' }}>About Me</h2>
                        <br />
                        <br />
                        <p>I am a passionate and dedicated undergraduate student at the University of Moratuwa. I have a strong interest in web development and design, and I enjoy creating user-friendly and visually appealing websites. In addition to my academic pursuits, I actively participate in various coding communities and attend workshops to enhance my skills.</p>
                        <p>My goal is to leverage my knowledge and skills to contribute to innovative projects and make a positive impact in the field of technology.</p>
                        <br />
                        <br />
                    </div>
                    <div className='skills'>
                        <h2 style={{ color: '#4c6e50' }}>Skills</h2>
                        <br />
                        <br />
                        <ul>
                            <li><img src={pythonlogo} alt="Python" /> Python</li>
                            <li><img src={clogo} alt="C" /> C</li>
                            <li><img src={java} alt="Java" /> Java</li>
                            <li><img src={reactlogo} alt="React.js" /> React.js</li>
                            <li><img src={nodelogo} alt="Node.js" /> Node.js</li>
                            <li><img src={jslogo} alt="JavaScript" /> JavaScript</li>
                            <li><img src={mondb} alt="MongoDB" /> MongoDB</li>
                        </ul>
                        <br />
                        <br />
                        <ul>
                            <li><Web /> Web Development (HTML, CSS, JavaScript)</li>
                            <li><Code /> Programming</li>
                            {/* <li><Design /> UI/UX Design</li> */}
                            <li><ControlCamera /> Version Control (Git)</li>
                            <li><Build /> Problem Solving</li>
                        </ul>
                        <br />
                        <br />
                    </div>
    
                        <div className='projects'>
                            <h2 style={{ color: '#4c6e50' }}>Projects</h2>
                            <br />
                            <br />
                            <div className='project'>
                                <h3>01. Nano Processor Project</h3>
                                <p>The Nanoprocessor project is a significant milestone in my journey as a computer science engineering undergraduate and digital design enthusiast. Utilizing VHDL (Very High-Speed Integrated Circuit Hardware Description Language), I spearheaded the development of a cutting-edge nanoprocessor prototype.</p>
                                <a href="https://github.com/LRManamperi/Nano-Processor" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            </div>
                            <br />
                            <div className='project'>
                                <h3>02. Banking System DBMS Project</h3>
                                <p>The Banking System DBMS Project is a comprehensive database management solution tailored to streamline banking operations, ensuring efficient customer service and robust data management. It's designed to handle various banking transactions, customer information, account management, and reporting functionalities.</p>
                                <a href="#https://github.com/NirukshaSandeepa/Banking-System" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            </div>
                            <br />
                            <br />
                        </div>
                        <div className='contact-me'>
                            <h2 style={{ color: '#4c6e50' }}>Contact Me</h2>
                            <br />
                            <br />
                                <p>Email: lakshanimanamperi289@gmail.com</p>
                                <br />
                                <p>Phone: +94 70 184 4694</p>
                                <br />
                                <br />
                        </div>
                        {/* add rasa image */}
                        <img src={rasa} alt="rasa" className="rasa" />
                </div>
                <div className='image-container'>
                    {showCV && <embed src={cv} type="application/pdf" width="100%" height="300px" />}
                    <img src={anu2} alt="Anu2" className="anu2-pic" />
                </div>
            </div>
        </div>
    );
};

export default Main;
