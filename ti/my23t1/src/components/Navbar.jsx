import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
const Navbar = () =>  {
    return (
        <>
        <header className = "navbar">
            <div className = "logo-container">
                <img src = "./logo512.png" alt = "logo" className = "logo-img"/>
            </div>
                <nav className = "nav-links">
                    <div className = "desktop-nav">
                        <Link to = '/'>Home</Link>
                        <Link to = '/blanko'>Blanko</Link>
                        <Link to = '/Slido'>Slido</Link>
                    </div>
                    <div className = "mobile-nav"> 
                        <Link to = '/'>H</Link>
                        <Link to = '/blanko'>B</Link>
                        <Link to = '/Slido'>S</Link>
                    </div>
                </nav>
        </header>
        </>
    )
}

export default Navbar;