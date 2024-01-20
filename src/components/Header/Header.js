import React from "react";
import { Link } from "react-router-dom";
import logo from '../../data/images/logo.jpg';
import './Header.scss'

function Header({resetState}) {
    const handleLogoClick = () => {
        resetState();
    }
    return(
        <header className="header">
            <Link to={'/'} onClick={handleLogoClick}>
                <img className ="header__logo" src={logo} alt="BrainFlix-Logo"/>
            </Link>
            <h3 className="header__home">Home</h3>
            <section className='header__searchContainer'>
                    <input className="header__searchContainer-search" name='search' type="search" placeholder="Search Champion"/>  
            </section>
            
        </header>
    );
}
export default Header;
