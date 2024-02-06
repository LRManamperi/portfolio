import React from 'react';
import './Styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <h1>Portfolio App</h1>
                    <br />
                    <li>
                        <Link to='/'><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>About</b></Link>
                    </li>
                    <li>
                        <Link to='/'><b>Contact</b></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

